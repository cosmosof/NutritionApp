// eslint-disable
// this is an auto generated file. This will be overwritten

export const getNutrition = `query GetNutrition($id: ID!) {
  getNutrition(id: $id) {
    id
    profileId
    name
    gender
    dob
    weight
    height
    activity_level
  }
}
`;
export const listNutritions = `query ListNutritions(
  $filter: ModelNutritionFilterInput
  $limit: Int
  $nextToken: String
) {
  listNutritions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      profileId
      name
      gender
      dob
      weight
      height
      activity_level
    }
    nextToken
  }
}
`;
export const getNutritionProfile = `query getNutrition(
  $id: String
) {
  getNutrition(id: $id) {
      id
      profileId
      name
      gender
      dob
      weight
      height
      activity_level
    
  }
}
`;

