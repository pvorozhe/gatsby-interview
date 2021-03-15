
import "react-toastify/dist/ReactToastify.css";

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core';

import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import * as PullRequestDetailTypes from './types/PullRequestDetail';
export const PULLREQUEST_DETAIL = gql`

query PullRequestDetail($ids: [ID!]!) {
  nodes(ids: $ids) {
    id
    ... on PullRequest {
      title
      id
      body
      comments(last: 10, orderBy: {field: UPDATED_AT, direction: ASC}) {
        edges {
          node {
            author {
              login
            }
            body
            createdAt
          }
        }
      }
      createdAt
      closedAt
      author {
        login
      }
      number
      deletions
      additions
    }
  }
}`

type PullRequestDetailProps = {
    id: string;
}

function getCommentsList(data: any): any[] {
    let listItems = []
    let rowId = 0;
    for (var edge of data.nodes[0].comments.edges) {
        const author = edge.node.author.login;
        const body = edge.node.body;
        listItems.push({ rowId, author, body })
        rowId++;
    }
    return listItems;
}

function getPRId(data: any): any {
    return data.nodes[0].number;
}

function getPRAuthor(data: any): any {
    return data.nodes[0].author.login;
}

function getPRTitle(data: any): any {
    return data.nodes[0].title;
}

function getPRChangesCount(data: any): any {
    return "+" + data.nodes[0].additions + " -" + data.nodes[0].deletions;
}

function PullRequestDetailQuery({ id }: PullRequestDetailProps) {
    const ids: string[] = [id];
    const {
        data,
        loading,
        error
    } = useQuery<
        PullRequestDetailTypes.PullRequestDetail,
        PullRequestDetailTypes.PullRequestDetailVariables
    >(PULLREQUEST_DETAIL, { variables: { ids: ids } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    if (!data) return <p>Not found</p>;

    const rows: any[] = getCommentsList(data);
    const prNumber: number = getPRId(data);
    const author: string = getPRAuthor(data);
    const title: string = getPRTitle(data);
    const changes: string = getPRChangesCount(data);
    return (
        <div>
            <h3 className="heading">{title} #{prNumber}</h3>
            <Paper >
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Author: {author}</TableCell>
                            <TableCell>{changes}</TableCell>
                        </TableRow>
                    </TableHead>

                </Table>
            </Paper>
            <h4 className="heading">Comments:</h4>
            <Paper >
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Author</TableCell>
                            <TableCell>Comment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.author}
                                    </TableCell>
                                    <TableCell >{row.body}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
}

export default PullRequestDetailQuery;