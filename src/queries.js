export const DEFAULT_QUERY = `query {
    busters {
      id
      username
      datesWon
      avatarUrl
    }
  }`;

export const BUSTERS_NO_DATES = `
    query bustersByUsernames($usernames: [String]!) {
      bustersByUsernames(usernames: $usernames) {
        username
        datesWon
      }
    }
  `;

export const BUSTERS_SELECTED_WITHIN = `
    query bustersByUsernamesWithin($usernames: [String]!, $startDate: String!, $endDate: String!) {
      bustersByUsernamesWithin(usernames: $usernames, startDate: $startDate, endDate: $endDate) {
        username
        datesWon
      }
    }
  `;

export const BUSTERS_WITHIN = `
    query bustersWithin($startDate: String!, $endDate: String!) {
      bustersWithin(startDate: $startDate, endDate: $endDate) {
        username
        datesWon
      }
    }
  `;

export const BUSTERS_BY_YEAR = `
    query bustersByYear($year: String!) {
      bustersByYear(year: $year) {
        id
        username
        datesWon
        avatarUrl
      }
    }
  `;
