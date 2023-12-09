import { gql } from 'graphql-request';
export const ReadDashboard= gql`query ReadDashboard($guid: EntityGuid!) {
    actor {
        entity(guid: $guid) {
            guid
            ... on DashboardEntity {
                __typename
                accountId
                createdAt
                dashboardParentGuid
                description
                indexedAt
                name
                owner { email userId }
                pages {
                    createdAt
                    description
                    guid
                    name
                    owner { email userId }
                    updatedAt
                    widgets {
                        rawConfiguration
                        configuration {
                            area { nrqlQueries { accountId query } }
                            bar { nrqlQueries { accountId query } }
                            billboard { nrqlQueries { accountId query } thresholds { alertSeverity value } }
                            line { nrqlQueries { accountId query } }
                            markdown { text }
                            pie { nrqlQueries { accountId query } }
                            table { nrqlQueries { accountId query } }
                        }
                        layout { column height row width }
                        title
                        visualization { id }
                        id
                        linkedEntities {
                            __typename
                            guid
                            name
                            accountId
                            tags { key values }
                            ... on DashboardEntityOutline {
                                dashboardParentGuid
                            }
                        }
                    }
                }
                permalink
                permissions
                tags { key values }
                tagsWithMetadata { key values { mutable value } }
                updatedAt
                variables {
                    defaultValues {
                        value {
                            string
                        }
                    }
                    isMultiSelection
                    items {
                        title
                        value
                    }
                    name
                    nrqlQuery {
                        accountIds
                        query
                    }
                    replacementStrategy
                    title
                    type
                }
            }
        }
    }
}`;