import React, { useState } from 'react';
import { ToastContainer } from "react-toastify";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PullRequestDetails from './pullRequestDetails'
import { PullRequestState } from './../types/graphql-global-types'

import * as PullRequestsListTypes from './types/PullRequestsList';

import { useQuery } from "react-apollo";
import gql from "graphql-tag";

export const PULLREQUESTS_DATA = gql`
  query PullRequestsList($query: String!) {
    search(
      query: $query
      type: ISSUE
      first: 100
    ) {
      issueCount
      edges {
        node {
          ... on PullRequest {
            number
            id
            title
            state
            url
          }
        }
      }
    }
  }
`;

type PullRequestsProps = {
  repo: string;
}

function getPullRequestList(data: any): any {
  let listItems = []
  let rowId = 0;
  for (var edge of data.search.edges) {
    const title = edge.node.title;
    const id = edge.node.id;
    const url = edge.node.url;
    const state = edge.node.state
    const detailButton = <PullRequestDetails id={id} />
    listItems.push({ rowId, title, url, state, detailButton })
    rowId++;
  }
  return listItems;
}

function PullRequestsTable({ repo }: PullRequestsProps) {
  const [state, setState] = useState<string>('')

  const handlePrStateSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setState(event.target.value as string);
  };
  const stateQueryString = state ? `is:${state} ` : ``;
  const query = stateQueryString + `is:pr is:public archived:false repo:${repo}`;
  const {
    data,
    loading,
    error
  } = useQuery<
    PullRequestsListTypes.PullRequestsList,
    PullRequestsListTypes.PullRequestsListVariables
  >(PULLREQUESTS_DATA, { variables: { query: query } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (!data) return <p>Not found</p>;

  const rows: any[] = getPullRequestList(data);
  return (
    <div>

      <Paper >
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell >URL</TableCell>
              <TableCell >State :
                <FormControl>
                  <Select
                    labelId="pr-state-select-label"
                    id="pr-state-select"
                    value={state}
                    onChange={handlePrStateSelect}
                  >
                    <MenuItem value={PullRequestState.OPEN}>{PullRequestState.OPEN}</MenuItem>
                    <MenuItem value={PullRequestState.MERGED}>{PullRequestState.MERGED}</MenuItem>
                    <MenuItem value={PullRequestState.CLOSED}>{PullRequestState.CLOSED}</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell >Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell >{row.url}</TableCell>
                  <TableCell >{row.state}</TableCell>
                  <TableCell >{row.detailButton}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
      <ToastContainer style={{ width: "90%" }}
        limit={1}
        position="top-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss={false}
        draggable={false}
      />
    </div>
  );
}

export default PullRequestsTable;
