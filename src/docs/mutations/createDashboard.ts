// eslint-disable-next-line import/no-extraneous-dependencies
import { gql } from 'graphql-request';
export const CreateDashboard = gql`mutation CreateDashboard(
    $accountId: Int!,
    $dashboard: DashboardInput!,
) { dashboardCreate(
    accountId: $accountId,
    dashboard: $dashboard,
) {
    entityResult {
        accountId
        createdAt
        description
        guid
        name
        owner {
            email
            userId
        }
        pages {
            createdAt
            description
            guid
            name
            owner {
                email
                userId
            }
            updatedAt
            widgets {
                configuration {
                    area {
                        nrqlQueries {
                            accountId
                            query
                        }
                    }
                    bar {
                        nrqlQueries {
                            accountId
                            query
                        }
                    }
                    billboard {
                        nrqlQueries {
                            accountId
                            query
                        }
                        thresholds {
                            alertSeverity
                            value
                        }
                    }
                    line {
                        nrqlQueries {
                            accountId
                            query
                        }
                    }
                    markdown {
                        text
                    }
                    pie {
                        nrqlQueries {
                            accountId
                            query
                        }
                    }
                    table {
                        nrqlQueries {
                            accountId
                            query
                        }
                    }
                }
                id
                layout {
                    column
                    height
                    row
                    width
                }
                linkedEntities {
                    __typename
                    account {
                        id
                        name
                        reportingEventTypes
                    }
                    accountId
                    alertSeverity
                    domain
                    entityType
                    firstIndexedAt
                    guid
                    indexedAt
                    lastReportingChangeAt
                    name
                    permalink
                    reporting
                    serviceLevel {
                        indicators {
                            createdAt
                            createdBy {
                                email
                                gravatar
                                id
                                name
                            }
                            description
                            entityGuid
                            events {
                                account {
                                    id
                                    name
                                }
                                badEvents {
                                    from
                                    select {
                                        attribute
                                        function
                                    }
                                    where
                                }
                                goodEvents {
                                    from
                                    select {
                                        attribute
                                        function
                                    }
                                    where
                                }
                                validEvents {
                                    from
                                    select {
                                        attribute
                                        function
                                    }
                                    where
                                }
                            }
                            guid
                            id
                            name
                            objectives {
                                description
                                name
                                resultQueries {
                                    attainment {
                                        nrql
                                    }
                                }
                                target
                                timeWindow {
                                    rolling {
                                        count
                                        unit
                                    }
                                }
                            }
                            resultQueries {
                                goodEvents {
                                    nrql
                                }
                                indicator {
                                    nrql
                                }
                                validEvents {
                                    nrql
                                }
                            }
                            slug
                            updatedAt
                            updatedBy {
                                email
                                gravatar
                                id
                                name
                            }
                        }
                    }
                    tags {
                        key
                        values
                    }
                    type
                    ... on ApmApplicationEntityOutline {
                        __typename
                        account {
                            id
                            name
                            reportingEventTypes
                        }
                        apmBrowserSummary {
                            ajaxRequestThroughput
                            ajaxResponseTimeAverage
                            jsErrorRate
                            pageLoadThroughput
                            pageLoadTimeAverage
                        }
                        apmSummary {
                            apdexScore
                            errorRate
                            hostCount
                            instanceCount
                            nonWebResponseTimeAverage
                            nonWebThroughput
                            responseTimeAverage
                            throughput
                            webResponseTimeAverage
                            webThroughput
                        }
                        applicationId
                        language
                        runningAgentVersions {
                            apmMax: maxVersion
                            apmMin: minVersion
                        }
                        serviceLevel {
                            indicators {
                                createdAt
                                createdBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                                description
                                entityGuid
                                events {
                                    account {
                                        id
                                        name
                                    }
                                    badEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    goodEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    validEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                }
                                guid
                                id
                                name
                                objectives {
                                    description
                                    name
                                    resultQueries {
                                        attainment {
                                            nrql
                                        }
                                    }
                                    target
                                    timeWindow {
                                        rolling {
                                            count
                                            unit
                                        }
                                    }
                                }
                                resultQueries {
                                    goodEvents {
                                        nrql
                                    }
                                    indicator {
                                        nrql
                                    }
                                    validEvents {
                                        nrql
                                    }
                                }
                                slug
                                updatedAt
                                updatedBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                            }
                        }
                        settings {
                            apdexTarget
                            serverSideConfig
                        }
                        tags {
                            key
                            values
                        }
                    }
                    ... on ApmDatabaseInstanceEntityOutline {
                        __typename
                        account {
                            id
                            name
                            reportingEventTypes
                        }
                        host
                        portOrPath
                        serviceLevel {
                            indicators {
                                createdAt
                                createdBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                                description
                                entityGuid
                                events {
                                    account {
                                        id
                                        name
                                    }
                                    badEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    goodEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    validEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                }
                                guid
                                id
                                name
                                objectives {
                                    description
                                    name
                                    resultQueries {
                                        attainment {
                                            nrql
                                        }
                                    }
                                    target
                                    timeWindow {
                                        rolling {
                                            count
                                            unit
                                        }
                                    }
                                }
                                resultQueries {
                                    goodEvents {
                                        nrql
                                    }
                                    indicator {
                                        nrql
                                    }
                                    validEvents {
                                        nrql
                                    }
                                }
                                slug
                                updatedAt
                                updatedBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                            }
                        }
                        tags {
                            key
                            values
                        }
                        vendor
                    }
                    ... on ApmExternalServiceEntityOutline {
                        __typename
                        account {
                            id
                            name
                            reportingEventTypes
                        }
                        externalSummary {
                            responseTimeAverage
                            throughput
                        }
                        host
                        serviceLevel {
                            indicators {
                                createdAt
                                createdBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                                description
                                entityGuid
                                events {
                                    account {
                                        id
                                        name
                                    }
                                    badEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    goodEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    validEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                }
                                guid
                                id
                                name
                                objectives {
                                    description
                                    name
                                    resultQueries {
                                        attainment {
                                            nrql
                                        }
                                    }
                                    target
                                    timeWindow {
                                        rolling {
                                            count
                                            unit
                                        }
                                    }
                                }
                                resultQueries {
                                    goodEvents {
                                        nrql
                                    }
                                    indicator {
                                        nrql
                                    }
                                    validEvents {
                                        nrql
                                    }
                                }
                                slug
                                updatedAt
                                updatedBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                            }
                        }
                        tags {
                            key
                            values
                        }
                    }
                    ... on BrowserApplicationEntityOutline {
                        __typename
                        account {
                            id
                            name
                            reportingEventTypes
                        }
                        agentInstallType
                        applicationId
                        browserSummary {
                            ajaxRequestThroughput
                            ajaxResponseTimeAverage
                            jsErrorRate
                            pageLoadThroughput
                            pageLoadTimeAverage
                            pageLoadTimeMedian
                            spaResponseTimeAverage
                            spaResponseTimeMedian
                        }
                        runningAgentVersions {
                            maxVersion
                            minVersion
                        }
                        serviceLevel {
                            indicators {
                                createdAt
                                createdBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                                description
                                entityGuid
                                events {
                                    account {
                                        id
                                        name
                                    }
                                    badEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    goodEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    validEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                }
                                guid
                                id
                                name
                                objectives {
                                    description
                                    name
                                    resultQueries {
                                        attainment {
                                            nrql
                                        }
                                    }
                                    target
                                    timeWindow {
                                        rolling {
                                            count
                                            unit
                                        }
                                    }
                                }
                                resultQueries {
                                    goodEvents {
                                        nrql
                                    }
                                    indicator {
                                        nrql
                                    }
                                    validEvents {
                                        nrql
                                    }
                                }
                                slug
                                updatedAt
                                updatedBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                            }
                        }
                        servingApmApplicationId
                        settings {
                            apdexTarget
                        }
                        tags {
                            key
                            values
                        }
                    }
                    ... on DashboardEntityOutline {
                        __typename
                        account {
                            id
                            name
                            reportingEventTypes
                        }
                        eo: createdAt
                        dashboardParentGuid
                        owner {
                            email
                            userId
                        }
                        permissions
                        serviceLevel {
                            indicators {
                                createdAt
                                createdBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                                description
                                entityGuid
                                events {
                                    account {
                                        id
                                        name
                                    }
                                    badEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    goodEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    validEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                }
                                guid
                                id
                                name
                                objectives {
                                    description
                                    name
                                    resultQueries {
                                        attainment {
                                            nrql
                                        }
                                    }
                                    target
                                    timeWindow {
                                        rolling {
                                            count
                                            unit
                                        }
                                    }
                                }
                                resultQueries {
                                    goodEvents {
                                        nrql
                                    }
                                    indicator {
                                        nrql
                                    }
                                    validEvents {
                                        nrql
                                    }
                                }
                                slug
                                updatedAt
                                updatedBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                            }
                        }
                        tags {
                            key
                            values
                        }
                        ua: updatedAt
                    }
                    ... on ExternalEntityOutline {
                        __typename
                        account {
                            id
                            name
                            reportingEventTypes
                        }
                        serviceLevel {
                            indicators {
                                createdAt
                                createdBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                                description
                                entityGuid
                                events {
                                    account {
                                        id
                                        name
                                    }
                                    badEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    goodEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    validEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                }
                                guid
                                id
                                name
                                objectives {
                                    description
                                    name
                                    resultQueries {
                                        attainment {
                                            nrql
                                        }
                                    }
                                    target
                                    timeWindow {
                                        rolling {
                                            count
                                            unit
                                        }
                                    }
                                }
                                resultQueries {
                                    goodEvents {
                                        nrql
                                    }
                                    indicator {
                                        nrql
                                    }
                                    validEvents {
                                        nrql
                                    }
                                }
                                slug
                                updatedAt
                                updatedBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                            }
                        }
                        tags {
                            key
                            values
                        }
                    }
                    ... on GenericEntityOutline {
                        __typename
                        account {
                            id
                            name
                            reportingEventTypes
                        }
                        serviceLevel {
                            indicators {
                                createdAt
                                createdBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                                description
                                entityGuid
                                events {
                                    account {
                                        id
                                        name
                                    }
                                    badEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    goodEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    validEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                }
                                guid
                                id
                                name
                                objectives {
                                    description
                                    name
                                    resultQueries {
                                        attainment {
                                            nrql
                                        }
                                    }
                                    target
                                    timeWindow {
                                        rolling {
                                            count
                                            unit
                                        }
                                    }
                                }
                                resultQueries {
                                    goodEvents {
                                        nrql
                                    }
                                    indicator {
                                        nrql
                                    }
                                    validEvents {
                                        nrql
                                    }
                                }
                                slug
                                updatedAt
                                updatedBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                            }
                        }
                        tags {
                            key
                            values
                        }
                    }
                    ... on GenericInfrastructureEntityOutline {
                        __typename
                        account {
                            id
                            name
                            reportingEventTypes
                        }
                        integrationTypeCode
                        serviceLevel {
                            indicators {
                                createdAt
                                createdBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                                description
                                entityGuid
                                events {
                                    account {
                                        id
                                        name
                                    }
                                    badEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    goodEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    validEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                }
                                guid
                                id
                                name
                                objectives {
                                    description
                                    name
                                    resultQueries {
                                        attainment {
                                            nrql
                                        }
                                    }
                                    target
                                    timeWindow {
                                        rolling {
                                            count
                                            unit
                                        }
                                    }
                                }
                                resultQueries {
                                    goodEvents {
                                        nrql
                                    }
                                    indicator {
                                        nrql
                                    }
                                    validEvents {
                                        nrql
                                    }
                                }
                                slug
                                updatedAt
                                updatedBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                            }
                        }
                        tags {
                            key
                            values
                        }
                    }
                    ... on InfrastructureAwsLambdaFunctionEntityOutline {
                        __typename
                        account {
                            id
                            name
                            reportingEventTypes
                        }
                        integrationTypeCode
                        runtime
                        serviceLevel {
                            indicators {
                                createdAt
                                createdBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                                description
                                entityGuid
                                events {
                                    account {
                                        id
                                        name
                                    }
                                    badEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    goodEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    validEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                }
                                guid
                                id
                                name
                                objectives {
                                    description
                                    name
                                    resultQueries {
                                        attainment {
                                            nrql
                                        }
                                    }
                                    target
                                    timeWindow {
                                        rolling {
                                            count
                                            unit
                                        }
                                    }
                                }
                                resultQueries {
                                    goodEvents {
                                        nrql
                                    }
                                    indicator {
                                        nrql
                                    }
                                    validEvents {
                                        nrql
                                    }
                                }
                                slug
                                updatedAt
                                updatedBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                            }
                        }
                        tags {
                            key
                            values
                        }
                    }
                    ... on InfrastructureHostEntityOutline {
                        __typename
                        account {
                            id
                            name
                            reportingEventTypes
                        }
                        hostSummary {
                            cpuUtilizationPercent
                            diskUsedPercent
                            memoryUsedPercent
                            networkReceiveRate
                            networkTransmitRate
                            servicesCount
                        }
                        serviceLevel {
                            indicators {
                                createdAt
                                createdBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                                description
                                entityGuid
                                events {
                                    account {
                                        id
                                        name
                                    }
                                    badEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    goodEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    validEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                }
                                guid
                                id
                                name
                                objectives {
                                    description
                                    name
                                    resultQueries {
                                        attainment {
                                            nrql
                                        }
                                    }
                                    target
                                    timeWindow {
                                        rolling {
                                            count
                                            unit
                                        }
                                    }
                                }
                                resultQueries {
                                    goodEvents {
                                        nrql
                                    }
                                    indicator {
                                        nrql
                                    }
                                    validEvents {
                                        nrql
                                    }
                                }
                                slug
                                updatedAt
                                updatedBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                            }
                        }
                        tags {
                            key
                            values
                        }
                    }
                    ... on KeyTransactionEntityOutline {
                        __typename
                        account {
                            id
                            name
                            reportingEventTypes
                        }
                        serviceLevel {
                            indicators {
                                createdAt
                                createdBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                                description
                                entityGuid
                                events {
                                    account {
                                        id
                                        name
                                    }
                                    badEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    goodEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    validEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                }
                                guid
                                id
                                name
                                objectives {
                                    description
                                    name
                                    resultQueries {
                                        attainment {
                                            nrql
                                        }
                                    }
                                    target
                                    timeWindow {
                                        rolling {
                                            count
                                            unit
                                        }
                                    }
                                }
                                resultQueries {
                                    goodEvents {
                                        nrql
                                    }
                                    indicator {
                                        nrql
                                    }
                                    validEvents {
                                        nrql
                                    }
                                }
                                slug
                                updatedAt
                                updatedBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                            }
                        }
                        tags {
                            key
                            values
                        }
                    }
                    ... on MobileApplicationEntityOutline {
                        __typename
                        account {
                            id
                            name
                            reportingEventTypes
                        }
                        applicationId
                        mobileSummary {
                            appLaunchCount
                            crashCount
                            crashRate
                            httpErrorRate
                            httpRequestCount
                            httpRequestRate
                            httpResponseTimeAverage
                            mobileSessionCount
                            networkFailureRate
                            usersAffectedCount
                        }
                        serviceLevel {
                            indicators {
                                createdAt
                                createdBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                                description
                                entityGuid
                                events {
                                    account {
                                        id
                                        name
                                    }
                                    badEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    goodEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    validEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                }
                                guid
                                id
                                name
                                objectives {
                                    description
                                    name
                                    resultQueries {
                                        attainment {
                                            nrql
                                        }
                                    }
                                    target
                                    timeWindow {
                                        rolling {
                                            count
                                            unit
                                        }
                                    }
                                }
                                resultQueries {
                                    goodEvents {
                                        nrql
                                    }
                                    indicator {
                                        nrql
                                    }
                                    validEvents {
                                        nrql
                                    }
                                }
                                slug
                                updatedAt
                                updatedBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                            }
                        }
                        tags {
                            key
                            values
                        }
                    }
                    ... on SecureCredentialEntityOutline {
                        __typename
                        account {
                            id
                            name
                            reportingEventTypes
                        }
                        description
                        secureCredentialId
                        secureCredentialSummary {
                            failingMonitorCount
                            monitorCount
                        }
                        serviceLevel {
                            indicators {
                                createdAt
                                createdBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                                description
                                entityGuid
                                events {
                                    account {
                                        id
                                        name
                                    }
                                    badEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    goodEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    validEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                }
                                guid
                                id
                                name
                                objectives {
                                    description
                                    name
                                    resultQueries {
                                        attainment {
                                            nrql
                                        }
                                    }
                                    target
                                    timeWindow {
                                        rolling {
                                            count
                                            unit
                                        }
                                    }
                                }
                                resultQueries {
                                    goodEvents {
                                        nrql
                                    }
                                    indicator {
                                        nrql
                                    }
                                    validEvents {
                                        nrql
                                    }
                                }
                                slug
                                updatedAt
                                updatedBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                            }
                        }
                        tags {
                            key
                            values
                        }
                        updatedAt
                    }
                    ... on SyntheticMonitorEntityOutline {
                        __typename
                        account {
                            id
                            name
                            reportingEventTypes
                        }
                        monitorId
                        monitorSummary {
                            locationsFailing
                            locationsRunning
                            status
                            successRate
                        }
                        monitorType
                        monitoredUrl
                        period
                        serviceLevel {
                            indicators {
                                createdAt
                                createdBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                                description
                                entityGuid
                                events {
                                    account {
                                        id
                                        name
                                    }
                                    badEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    goodEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    validEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                }
                                guid
                                id
                                name
                                objectives {
                                    description
                                    name
                                    resultQueries {
                                        attainment {
                                            nrql
                                        }
                                    }
                                    target
                                    timeWindow {
                                        rolling {
                                            count
                                            unit
                                        }
                                    }
                                }
                                resultQueries {
                                    goodEvents {
                                        nrql
                                    }
                                    indicator {
                                        nrql
                                    }
                                    validEvents {
                                        nrql
                                    }
                                }
                                slug
                                updatedAt
                                updatedBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                            }
                        }
                        tags {
                            key
                            values
                        }
                    }
                    ... on ThirdPartyServiceEntityOutline {
                        __typename
                        account {
                            id
                            name
                            reportingEventTypes
                        }
                        serviceLevel {
                            indicators {
                                createdAt
                                createdBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                                description
                                entityGuid
                                events {
                                    account {
                                        id
                                        name
                                    }
                                    badEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    goodEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    validEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                }
                                guid
                                id
                                name
                                objectives {
                                    description
                                    name
                                    resultQueries {
                                        attainment {
                                            nrql
                                        }
                                    }
                                    target
                                    timeWindow {
                                        rolling {
                                            count
                                            unit
                                        }
                                    }
                                }
                                resultQueries {
                                    goodEvents {
                                        nrql
                                    }
                                    indicator {
                                        nrql
                                    }
                                    validEvents {
                                        nrql
                                    }
                                }
                                slug
                                updatedAt
                                updatedBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                            }
                        }
                        tags {
                            key
                            values
                        }
                    }
                    ... on UnavailableEntityOutline {
                        __typename
                        account {
                            id
                            name
                            reportingEventTypes
                        }
                        serviceLevel {
                            indicators {
                                createdAt
                                createdBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                                description
                                entityGuid
                                events {
                                    account {
                                        id
                                        name
                                    }
                                    badEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    goodEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    validEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                }
                                guid
                                id
                                name
                                objectives {
                                    description
                                    name
                                    resultQueries {
                                        attainment {
                                            nrql
                                        }
                                    }
                                    target
                                    timeWindow {
                                        rolling {
                                            count
                                            unit
                                        }
                                    }
                                }
                                resultQueries {
                                    goodEvents {
                                        nrql
                                    }
                                    indicator {
                                        nrql
                                    }
                                    validEvents {
                                        nrql
                                    }
                                }
                                slug
                                updatedAt
                                updatedBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                            }
                        }
                        tags {
                            key
                            values
                        }
                    }
                    ... on WorkloadEntityOutline {
                        __typename
                        account {
                            id
                            name
                            reportingEventTypes
                        }
                        createdAt
                        createdByUser {
                            email
                            gravatar
                            id
                            name
                        }
                        serviceLevel {
                            indicators {
                                createdAt
                                createdBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                                description
                                entityGuid
                                events {
                                    account {
                                        id
                                        name
                                    }
                                    badEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    goodEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                    validEvents {
                                        from
                                        select {
                                            attribute
                                            function
                                        }
                                        where
                                    }
                                }
                                guid
                                id
                                name
                                objectives {
                                    description
                                    name
                                    resultQueries {
                                        attainment {
                                            nrql
                                        }
                                    }
                                    target
                                    timeWindow {
                                        rolling {
                                            count
                                            unit
                                        }
                                    }
                                }
                                resultQueries {
                                    goodEvents {
                                        nrql
                                    }
                                    indicator {
                                        nrql
                                    }
                                    validEvents {
                                        nrql
                                    }
                                }
                                slug
                                updatedAt
                                updatedBy {
                                    email
                                    gravatar
                                    id
                                    name
                                }
                            }
                        }
                        tags {
                            key
                            values
                        }
                        updatedAt
                        workloadStatus {
                            description
                            statusSource
                            statusValue
                            summary
                        }
                    }
                }
                rawConfiguration
                title
                visualization {
                    id
                }
            }
        }
        permissions
        updatedAt
        variables {
            defaultValue {
                string
            }
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
    errors {
        description
        type
    }
} }
`;