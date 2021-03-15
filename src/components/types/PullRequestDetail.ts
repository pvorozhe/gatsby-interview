/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PullRequestDetail
// ====================================================

export interface PullRequestDetail_nodes_AddedToProjectEvent {
  __typename: "AddedToProjectEvent" | "App" | "AssignedEvent" | "AutoMergeDisabledEvent" | "AutoMergeEnabledEvent" | "AutoRebaseEnabledEvent" | "AutoSquashEnabledEvent" | "AutomaticBaseChangeFailedEvent" | "AutomaticBaseChangeSucceededEvent" | "BaseRefChangedEvent" | "BaseRefDeletedEvent" | "BaseRefForcePushedEvent" | "Blob" | "Bot" | "BranchProtectionRule" | "CWE" | "CheckRun" | "CheckSuite" | "ClosedEvent" | "CodeOfConduct" | "CommentDeletedEvent" | "Commit" | "CommitComment" | "CommitCommentThread" | "ConnectedEvent" | "ConvertToDraftEvent" | "ConvertedNoteToIssueEvent" | "CrossReferencedEvent" | "DemilestonedEvent" | "DeployKey" | "DeployedEvent" | "Deployment" | "DeploymentEnvironmentChangedEvent" | "DeploymentStatus" | "DisconnectedEvent" | "Enterprise" | "EnterpriseAdministratorInvitation" | "EnterpriseIdentityProvider" | "EnterpriseRepositoryInfo" | "EnterpriseServerInstallation" | "EnterpriseServerUserAccount" | "EnterpriseServerUserAccountEmail" | "EnterpriseServerUserAccountsUpload" | "EnterpriseUserAccount" | "ExternalIdentity" | "Gist" | "GistComment" | "HeadRefDeletedEvent" | "HeadRefForcePushedEvent" | "HeadRefRestoredEvent" | "IpAllowListEntry" | "Issue" | "IssueComment" | "Label" | "LabeledEvent" | "Language" | "License" | "LockedEvent" | "Mannequin" | "MarkedAsDuplicateEvent" | "MarketplaceCategory" | "MarketplaceListing" | "MembersCanDeleteReposClearAuditEntry" | "MembersCanDeleteReposDisableAuditEntry" | "MembersCanDeleteReposEnableAuditEntry" | "MentionedEvent" | "MergedEvent" | "Milestone" | "MilestonedEvent" | "MovedColumnsInProjectEvent" | "OauthApplicationCreateAuditEntry" | "OrgAddBillingManagerAuditEntry" | "OrgAddMemberAuditEntry" | "OrgBlockUserAuditEntry" | "OrgConfigDisableCollaboratorsOnlyAuditEntry" | "OrgConfigEnableCollaboratorsOnlyAuditEntry" | "OrgCreateAuditEntry" | "OrgDisableOauthAppRestrictionsAuditEntry" | "OrgDisableSamlAuditEntry" | "OrgDisableTwoFactorRequirementAuditEntry" | "OrgEnableOauthAppRestrictionsAuditEntry" | "OrgEnableSamlAuditEntry" | "OrgEnableTwoFactorRequirementAuditEntry" | "OrgInviteMemberAuditEntry" | "OrgInviteToBusinessAuditEntry" | "OrgOauthAppAccessApprovedAuditEntry" | "OrgOauthAppAccessDeniedAuditEntry" | "OrgOauthAppAccessRequestedAuditEntry" | "OrgRemoveBillingManagerAuditEntry" | "OrgRemoveMemberAuditEntry" | "OrgRemoveOutsideCollaboratorAuditEntry" | "OrgRestoreMemberAuditEntry" | "OrgUnblockUserAuditEntry" | "OrgUpdateDefaultRepositoryPermissionAuditEntry" | "OrgUpdateMemberAuditEntry" | "OrgUpdateMemberRepositoryCreationPermissionAuditEntry" | "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry" | "Organization" | "OrganizationIdentityProvider" | "OrganizationInvitation" | "Package" | "PackageFile" | "PackageTag" | "PackageVersion" | "PinnedEvent" | "PinnedIssue" | "PrivateRepositoryForkingDisableAuditEntry" | "PrivateRepositoryForkingEnableAuditEntry" | "Project" | "ProjectCard" | "ProjectColumn" | "PublicKey" | "PullRequestCommit" | "PullRequestCommitCommentThread" | "PullRequestReview" | "PullRequestReviewComment" | "PullRequestReviewThread" | "Push" | "PushAllowance" | "Reaction" | "ReadyForReviewEvent" | "Ref" | "ReferencedEvent" | "Release" | "ReleaseAsset" | "RemovedFromProjectEvent" | "RenamedTitleEvent" | "ReopenedEvent" | "RepoAccessAuditEntry" | "RepoAddMemberAuditEntry" | "RepoAddTopicAuditEntry" | "RepoArchivedAuditEntry" | "RepoChangeMergeSettingAuditEntry" | "RepoConfigDisableAnonymousGitAccessAuditEntry" | "RepoConfigDisableCollaboratorsOnlyAuditEntry" | "RepoConfigDisableContributorsOnlyAuditEntry" | "RepoConfigDisableSockpuppetDisallowedAuditEntry" | "RepoConfigEnableAnonymousGitAccessAuditEntry" | "RepoConfigEnableCollaboratorsOnlyAuditEntry" | "RepoConfigEnableContributorsOnlyAuditEntry" | "RepoConfigEnableSockpuppetDisallowedAuditEntry" | "RepoConfigLockAnonymousGitAccessAuditEntry" | "RepoConfigUnlockAnonymousGitAccessAuditEntry" | "RepoCreateAuditEntry" | "RepoDestroyAuditEntry" | "RepoRemoveMemberAuditEntry" | "RepoRemoveTopicAuditEntry" | "Repository" | "RepositoryInvitation" | "RepositoryTopic" | "RepositoryVisibilityChangeDisableAuditEntry" | "RepositoryVisibilityChangeEnableAuditEntry" | "RepositoryVulnerabilityAlert" | "ReviewDismissalAllowance" | "ReviewDismissedEvent" | "ReviewRequest" | "ReviewRequestRemovedEvent" | "ReviewRequestedEvent" | "SavedReply" | "SecurityAdvisory" | "SponsorsListing" | "SponsorsTier" | "Sponsorship" | "Status" | "StatusCheckRollup" | "StatusContext" | "SubscribedEvent" | "Tag" | "Team" | "TeamAddMemberAuditEntry" | "TeamAddRepositoryAuditEntry" | "TeamChangeParentTeamAuditEntry" | "TeamDiscussion" | "TeamDiscussionComment" | "TeamRemoveMemberAuditEntry" | "TeamRemoveRepositoryAuditEntry" | "Topic" | "TransferredEvent" | "Tree" | "UnassignedEvent" | "UnlabeledEvent" | "UnlockedEvent" | "UnmarkedAsDuplicateEvent" | "UnpinnedEvent" | "UnsubscribedEvent" | "User" | "UserBlockedEvent" | "UserContentEdit" | "UserStatus" | "VerifiableDomain";
  /**
   * ID of the object.
   */
  id: string;
}

export interface PullRequestDetail_nodes_PullRequest_comments_edges_node_author {
  __typename: "Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization" | "User";
  /**
   * The username of the actor.
   */
  login: string;
}

export interface PullRequestDetail_nodes_PullRequest_comments_edges_node {
  __typename: "IssueComment";
  /**
   * The actor who authored the comment.
   */
  author: PullRequestDetail_nodes_PullRequest_comments_edges_node_author | null;
  /**
   * The body as Markdown.
   */
  body: string;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
}

export interface PullRequestDetail_nodes_PullRequest_comments_edges {
  __typename: "IssueCommentEdge";
  /**
   * The item at the end of the edge.
   */
  node: PullRequestDetail_nodes_PullRequest_comments_edges_node | null;
}

export interface PullRequestDetail_nodes_PullRequest_comments {
  __typename: "IssueCommentConnection";
  /**
   * A list of edges.
   */
  edges: (PullRequestDetail_nodes_PullRequest_comments_edges | null)[] | null;
}

export interface PullRequestDetail_nodes_PullRequest_author {
  __typename: "Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization" | "User";
  /**
   * The username of the actor.
   */
  login: string;
}

export interface PullRequestDetail_nodes_PullRequest {
  __typename: "PullRequest";
  /**
   * ID of the object.
   */
  id: string;
  /**
   * Identifies the pull request title.
   */
  title: string;
  /**
   * The body as Markdown.
   */
  body: string;
  /**
   * A list of comments associated with the pull request.
   */
  comments: PullRequestDetail_nodes_PullRequest_comments;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
  /**
   * Identifies the date and time when the object was closed.
   */
  closedAt: any | null;
  /**
   * The actor who authored the comment.
   */
  author: PullRequestDetail_nodes_PullRequest_author | null;
  /**
   * Identifies the pull request number.
   */
  number: number;
  /**
   * The number of deletions in this pull request.
   */
  deletions: number;
  /**
   * The number of additions in this pull request.
   */
  additions: number;
}

export type PullRequestDetail_nodes = PullRequestDetail_nodes_AddedToProjectEvent | PullRequestDetail_nodes_PullRequest;

export interface PullRequestDetail {
  /**
   * Lookup nodes by a list of IDs.
   */
  nodes: (PullRequestDetail_nodes | null)[];
}

export interface PullRequestDetailVariables {
  ids: string[];
}
