const nfldata = [
  {
    date: "2019-08-24T13:44:46.759Z",
    scores: [
      {
        startTime: "2019-08-24T17:00Z",
        shortName: "ARI @ MIN",
        status: {
          inning: 1,
          state: "pre",
          detail: "Sat, August 24th at 1:00 PM EDT",
          shortDetail: "8/24 - 1:00 PM EDT",
          completed: false
        },
        teams: {
          awayTeam: {
            alternateColor: "000000",
            venue: { id: "3970" },
            color: "A40227",
            displayName: "Arizona Cardinals",
            abbreviation: "ARI",
            isActive: true,
            shortDisplayName: "Cardinals",
            name: "Cardinals",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/ari.png",
            location: "Arizona",
            score: "0"
          },
          homeTeam: {
            alternateColor: "ffc62f",
            venue: { id: "5239" },
            color: "240A67",
            displayName: "Minnesota Vikings",
            abbreviation: "MIN",
            isActive: true,
            shortDisplayName: "Vikings",
            name: "Vikings",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/min.png",
            location: "Minnesota",
            score: "0"
          }
        }
      },
      {
        startTime: "2019-08-24T23:00Z",
        shortName: "HOU @ DAL",
        status: {
          inning: 0,
          state: "pre",
          detail: "Sat, August 24th at 7:00 PM EDT",
          shortDetail: "8/24 - 7:00 PM EDT",
          completed: false
        },
        teams: {
          awayTeam: {
            alternateColor: "a71930",
            venue: { id: "3891" },
            color: "00133F",
            displayName: "Houston Texans",
            abbreviation: "HOU",
            isActive: true,
            shortDisplayName: "Texans",
            name: "Texans",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/hou.png",
            location: "Houston",
            score: "0"
          },
          homeTeam: {
            alternateColor: "b0b7bc",
            venue: { id: "3687" },
            color: "002E4D",
            displayName: "Dallas Cowboys",
            abbreviation: "DAL",
            isActive: true,
            shortDisplayName: "Cowboys",
            name: "Cowboys",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/dal.png",
            location: "Dallas",
            score: "0"
          }
        }
      },
      {
        startTime: "2019-08-24T23:00Z",
        shortName: "CHI @ IND",
        status: {
          inning: 0,
          state: "pre",
          detail: "Sat, August 24th at 7:00 PM EDT",
          shortDetail: "8/24 - 7:00 PM EDT",
          completed: false
        },
        teams: {
          awayTeam: {
            alternateColor: "0b162a",
            venue: { id: "3933" },
            color: "152644",
            displayName: "Chicago Bears",
            abbreviation: "CHI",
            isActive: true,
            shortDisplayName: "Bears",
            name: "Bears",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/chi.png",
            location: "Chicago",
            score: "0"
          },
          homeTeam: {
            alternateColor: "ffffff",
            venue: { id: "3812" },
            color: "00417E",
            displayName: "Indianapolis Colts",
            abbreviation: "IND",
            isActive: true,
            shortDisplayName: "Colts",
            name: "Colts",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/ind.png",
            location: "Indianapolis",
            score: "0"
          }
        }
      },
      {
        startTime: "2019-08-24T23:30Z",
        shortName: "NO @ NYJ",
        status: {
          inning: 0,
          state: "pre",
          detail: "Sat, August 24th at 7:30 PM EDT",
          shortDetail: "8/24 - 7:30 PM EDT",
          completed: false
        },
        teams: {
          awayTeam: {
            alternateColor: "000000",
            venue: { id: "3493" },
            color: "020202",
            displayName: "New Orleans Saints",
            abbreviation: "NO",
            isActive: true,
            shortDisplayName: "Saints",
            name: "Saints",
            logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/no.png",
            location: "New Orleans",
            score: "0"
          },
          homeTeam: {
            alternateColor: "ffffff",
            venue: { id: "3839" },
            color: "174032",
            displayName: "New York Jets",
            abbreviation: "NYJ",
            isActive: true,
            shortDisplayName: "Jets",
            name: "Jets",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/nyj.png",
            location: "New York",
            score: "0"
          }
        }
      },
      {
        startTime: "2019-08-25T00:00Z",
        shortName: "SF @ KC",
        status: {
          inning: 0,
          state: "pre",
          detail: "Sat, August 24th at 8:00 PM EDT",
          shortDetail: "8/24 - 8:00 PM EDT",
          completed: false
        },
        teams: {
          awayTeam: {
            alternateColor: "b3995d",
            venue: { id: "4738" },
            color: "981324",
            displayName: "San Francisco 49ers",
            abbreviation: "SF",
            isActive: true,
            shortDisplayName: "49ers",
            name: "49ers",
            logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/sf.png",
            location: "San Francisco",
            score: "0"
          },
          homeTeam: {
            alternateColor: "e31837",
            venue: { id: "3622" },
            color: "BE1415",
            displayName: "Kansas City Chiefs",
            abbreviation: "KC",
            isActive: true,
            shortDisplayName: "Chiefs",
            name: "Chiefs",
            logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/kc.png",
            location: "Kansas City",
            score: "0"
          }
        }
      },
      {
        startTime: "2019-08-25T01:00Z",
        shortName: "DEN @ LAR",
        status: {
          inning: 0,
          state: "pre",
          detail: "Sat, August 24th at 9:00 PM EDT",
          shortDetail: "8/24 - 9:00 PM EDT",
          completed: false
        },
        teams: {
          awayTeam: {
            alternateColor: "fb4f14",
            venue: { id: "3937" },
            color: "002E4D",
            displayName: "Denver Broncos",
            abbreviation: "DEN",
            isActive: true,
            shortDisplayName: "Broncos",
            name: "Broncos",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/den.png",
            location: "Denver",
            score: "0"
          },
          homeTeam: {
            alternateColor: "b3995d",
            venue: { id: "477" },
            color: "00295B",
            displayName: "Los Angeles Rams",
            abbreviation: "LAR",
            isActive: true,
            shortDisplayName: "Rams",
            name: "Rams",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/lar.png",
            location: "Los Angeles",
            score: "0"
          }
        }
      },
      {
        startTime: "2019-08-25T02:00Z",
        shortName: "SEA @ LAC",
        status: {
          inning: 0,
          state: "pre",
          detail: "Sat, August 24th at 10:00 PM EDT",
          shortDetail: "8/24 - 10:00 PM EDT",
          completed: false
        },
        teams: {
          awayTeam: {
            alternateColor: "69be28",
            venue: { id: "3673" },
            color: "224970",
            displayName: "Seattle Seahawks",
            abbreviation: "SEA",
            isActive: true,
            shortDisplayName: "Seahawks",
            name: "Seahawks",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/sea.png",
            location: "Seattle",
            score: "0"
          },
          homeTeam: {
            alternateColor: "0073cf",
            venue: { id: "538" },
            color: "042453",
            displayName: "Los Angeles Chargers",
            abbreviation: "LAC",
            isActive: true,
            shortDisplayName: "Chargers",
            name: "Chargers",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/lac.png",
            location: "Los Angeles",
            score: "0"
          }
        }
      },
      {
        startTime: "2019-08-22T23:00Z",
        shortName: "NYG @ CIN",
        status: {
          inning: 4,
          state: "post",
          detail: "Final",
          shortDetail: "Final",
          completed: true
        },
        teams: {
          awayTeam: {
            alternateColor: "ffffff",
            venue: { id: "3839" },
            color: "052570",
            displayName: "New York Giants",
            abbreviation: "NYG",
            isActive: true,
            shortDisplayName: "Giants",
            name: "Giants",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/nyg.png",
            location: "New York",
            score: "25"
          },
          homeTeam: {
            alternateColor: "000000",
            venue: { id: "3874" },
            color: "FF2700",
            displayName: "Cincinnati Bengals",
            abbreviation: "CIN",
            isActive: true,
            shortDisplayName: "Bengals",
            name: "Bengals",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/cin.png",
            location: "Cincinnati",
            score: "23"
          }
        }
      },
      {
        startTime: "2019-08-22T23:30Z",
        shortName: "WSH @ ATL",
        status: {
          inning: 4,
          state: "post",
          detail: "Final",
          shortDetail: "Final",
          completed: true
        },
        teams: {
          awayTeam: {
            alternateColor: "ffb612",
            venue: { id: "3719" },
            color: "650415",
            displayName: "Washington Redskins",
            abbreviation: "WSH",
            isActive: true,
            shortDisplayName: "Redskins",
            name: "Redskins",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/wsh.png",
            location: "Washington",
            score: "19"
          },
          homeTeam: {
            alternateColor: "000000",
            venue: { id: "5348" },
            color: "000000",
            displayName: "Atlanta Falcons",
            abbreviation: "ATL",
            isActive: true,
            shortDisplayName: "Falcons",
            name: "Falcons",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/atl.png",
            location: "Atlanta",
            score: "7"
          }
        }
      },
      {
        startTime: "2019-08-22T23:30Z",
        shortName: "CAR @ NE",
        status: {
          inning: 4,
          state: "post",
          detail: "Final",
          shortDetail: "Final",
          completed: true
        },
        teams: {
          awayTeam: {
            alternateColor: "bfc0bf",
            venue: { id: "3628" },
            color: "2177B0",
            displayName: "Carolina Panthers",
            abbreviation: "CAR",
            isActive: true,
            shortDisplayName: "Panthers",
            name: "Panthers",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/car.png",
            location: "Carolina",
            score: "3"
          },
          homeTeam: {
            alternateColor: "b0b7bc",
            venue: { id: "3738" },
            color: "02244A",
            displayName: "New England Patriots",
            abbreviation: "NE",
            isActive: true,
            shortDisplayName: "Patriots",
            name: "Patriots",
            logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/ne.png",
            location: "New England",
            score: "10"
          }
        }
      },
      {
        startTime: "2019-08-22T23:30Z",
        shortName: "BAL @ PHI",
        status: {
          inning: 4,
          state: "post",
          detail: "Final",
          shortDetail: "Final",
          completed: true
        },
        teams: {
          awayTeam: {
            alternateColor: "9e7c0c",
            venue: { id: "3814" },
            color: "2B025B",
            displayName: "Baltimore Ravens",
            abbreviation: "BAL",
            isActive: true,
            shortDisplayName: "Ravens",
            name: "Ravens",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/bal.png",
            location: "Baltimore",
            score: "26"
          },
          homeTeam: {
            alternateColor: "a5acaf",
            venue: { id: "3806" },
            color: "06424D",
            displayName: "Philadelphia Eagles",
            abbreviation: "PHI",
            isActive: true,
            shortDisplayName: "Eagles",
            name: "Eagles",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/phi.png",
            location: "Philadelphia",
            score: "15"
          }
        }
      },
      {
        startTime: "2019-08-23T00:00Z",
        shortName: "GB @ OAK",
        status: {
          inning: 4,
          state: "post",
          detail: "Final",
          shortDetail: "Final",
          completed: true
        },
        teams: {
          awayTeam: {
            alternateColor: "ffb612",
            venue: { id: "3798" },
            color: "204E32",
            displayName: "Green Bay Packers",
            abbreviation: "GB",
            isActive: true,
            shortDisplayName: "Packers",
            name: "Packers",
            logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/gb.png",
            location: "Green Bay",
            score: "21"
          },
          homeTeam: {
            alternateColor: "a5acaf",
            venue: { id: "3867" },
            color: "000000",
            displayName: "Oakland Raiders",
            abbreviation: "OAK",
            isActive: true,
            shortDisplayName: "Raiders",
            name: "Raiders",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/oak.png",
            location: "Oakland",
            score: "22"
          }
        }
      },
      {
        startTime: "2019-08-23T00:00Z",
        shortName: "JAX @ MIA",
        status: {
          inning: 4,
          state: "post",
          detail: "Final",
          shortDetail: "Final",
          completed: true
        },
        teams: {
          awayTeam: {
            alternateColor: "000000",
            venue: { id: "3712" },
            color: "00839C",
            displayName: "Jacksonville Jaguars",
            abbreviation: "JAX",
            isActive: true,
            shortDisplayName: "Jaguars",
            name: "Jaguars",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/jax.png",
            location: "Jacksonville",
            score: "7"
          },
          homeTeam: {
            alternateColor: "005778",
            venue: { id: "3948" },
            color: "006B79",
            displayName: "Miami Dolphins",
            abbreviation: "MIA",
            isActive: true,
            shortDisplayName: "Dolphins",
            name: "Dolphins",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/mia.png",
            location: "Miami",
            score: "22"
          }
        }
      },
      {
        startTime: "2019-08-23T23:30Z",
        shortName: "CLE @ TB",
        status: {
          inning: 4,
          state: "post",
          detail: "Final",
          shortDetail: "Final",
          completed: true
        },
        teams: {
          awayTeam: {
            alternateColor: "4c230e",
            venue: { id: "3679" },
            color: "4C230E",
            displayName: "Cleveland Browns",
            abbreviation: "CLE",
            isActive: true,
            shortDisplayName: "Browns",
            name: "Browns",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/cle.png",
            location: "Cleveland",
            score: "12"
          },
          homeTeam: {
            alternateColor: "34302b",
            venue: { id: "3886" },
            color: "A80D08",
            displayName: "Tampa Bay Buccaneers",
            abbreviation: "TB",
            isActive: true,
            shortDisplayName: "Buccaneers",
            name: "Buccaneers",
            logo: "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/tb.png",
            location: "Tampa Bay",
            score: "13"
          }
        }
      },
      {
        startTime: "2019-08-24T00:00Z",
        shortName: "BUF @ DET",
        status: {
          inning: 4,
          state: "post",
          detail: "Final",
          shortDetail: "Final",
          completed: true
        },
        teams: {
          awayTeam: {
            alternateColor: "c60c30",
            venue: { id: "3883" },
            color: "04407F",
            displayName: "Buffalo Bills",
            abbreviation: "BUF",
            isActive: true,
            shortDisplayName: "Bills",
            name: "Bills",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/buf.png",
            location: "Buffalo",
            score: "24"
          },
          homeTeam: {
            alternateColor: "b0b7bc",
            venue: { id: "3727" },
            color: "035C98",
            displayName: "Detroit Lions",
            abbreviation: "DET",
            isActive: true,
            shortDisplayName: "Lions",
            name: "Lions",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/det.png",
            location: "Detroit",
            score: "20"
          }
        }
      },
      {
        startTime: "2019-08-26T00:00Z",
        shortName: "PIT @ TEN",
        status: {
          inning: 0,
          state: "pre",
          detail: "Sun, August 25th at 8:00 PM EDT",
          shortDetail: "8/25 - 8:00 PM EDT",
          completed: false
        },
        teams: {
          awayTeam: {
            alternateColor: "ffb612",
            venue: { id: "3752" },
            color: "000000",
            displayName: "Pittsburgh Steelers",
            abbreviation: "PIT",
            isActive: true,
            shortDisplayName: "Steelers",
            name: "Steelers",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/pit.png",
            location: "Pittsburgh",
            score: "0"
          },
          homeTeam: {
            alternateColor: "4b92db",
            venue: { id: "3810" },
            color: "2F95DD",
            displayName: "Tennessee Titans",
            abbreviation: "TEN",
            isActive: true,
            shortDisplayName: "Titans",
            name: "Titans",
            logo:
              "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/ten.png",
            location: "Tennessee",
            score: "0"
          }
        }
      }
    ]
  }
];

module.exports = { nfldata };
