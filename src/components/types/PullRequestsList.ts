/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PullRequestState } from "./../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: PullRequestsList
// ====================================================

export interface PullRequestsList_search_edges_node_App {
  __typename: "App" | "Issue" | "MarketplaceListing" | "Organization" | "Repository" | "User";
}

export interface PullRequestsList_search_edges_node_PullRequest {
  __typename: "PullRequest";
  /**
   * Identifies the pull request number.
   */
  number: number;
  id: string;
  /**
   * Identifies the pull request title.
   */
  title: string;
  /**
   * Identifies the state of the pull request.
   */
  state: PullRequestState;
  /**
   * The HTTP URL for this pull request.
   */
  url: any;
}

export type PullRequestsList_search_edges_node = PullRequestsList_search_edges_node_App | PullRequestsList_search_edges_node_PullRequest;

export interface PullRequestsList_search_edges {
  __typename: "SearchResultItemEdge";
  /**
   * The item at the end of the edge.
   */
  node: PullRequestsList_search_edges_node | null;
}

export interface PullRequestsList_search {
  __typename: "SearchResultItemConnection";
  /**
   * The number of issues that matched the search query.
   */
  issueCount: number;
  /**
   * A list of edges.
   */
  edges: (PullRequestsList_search_edges | null)[] | null;
}

export interface PullRequestsList {
  /**
   * Perform a search across resources.
   */
  search: PullRequestsList_search;
}

export interface PullRequestsListVariables {
  query: string;
}
