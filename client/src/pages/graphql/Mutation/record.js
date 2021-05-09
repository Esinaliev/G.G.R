import {gql} from '@apollo/client'

export const CREATE_RECORD = gql`
    mutation createRecord($input: RecordInput) {
        createRecord(input: $input) {
            id, username, age
        }
    }
`
