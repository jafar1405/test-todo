import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom";

const MockFollowersList = ({ url }) => (
  <BrowserRouter>
    <FollowersList url={url} />
  </BrowserRouter>
);

const server = setupServer(
  // Describe network behavior with request handlers.
  // Tip: move the handlers into their own module and
  // import it across your browser and Node.js setups!
  rest.get("/followers", (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            gender: "female",
            name: {
              title: "Ms",
              first: "Aino",
              last: "Huotari",
            },
            location: {
              street: {
                number: 3459,
                name: "Rotuaari",
              },
              city: "Luumäki",
              state: "South Karelia",
              country: "Finland",
              postcode: 72381,
              coordinates: {
                latitude: "-23.8819",
                longitude: "28.5471",
              },
              timezone: {
                offset: "-2:00",
                description: "Mid-Atlantic",
              },
            },
            email: "aino.huotari@example.com",
            login: {
              uuid: "03b65b7b-b804-4e31-a0cb-872bb77ef88d",
              username: "redleopard520",
              password: "sasha",
              salt: "Icp6lexd",
              md5: "450605be62bb135ee6472cff818c79f8",
              sha1: "595518bbe24c7aeb53b9ae0454c10800e8bb7874",
              sha256:
                "465bf245fc62b7a5743ce9ea1a8965c048bd23860d480183c17804e59c777eae",
            },
            dob: {
              date: "1954-09-25T10:38:16.433Z",
              age: 69,
            },
            registered: {
              date: "2016-04-03T17:35:36.957Z",
              age: 7,
            },
            phone: "05-499-558",
            cell: "040-928-88-28",
            id: {
              name: "HETU",
              value: "NaNNA276undefined",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/69.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/69.jpg",
              thumbnail:
                "https://randomuser.me/api/portraits/thumb/women/69.jpg",
            },
            nat: "FI",
          },
          {
            gender: "female",
            name: {
              title: "Ms",
              first: "Elli",
              last: "Wallo",
            },
            location: {
              street: {
                number: 1006,
                name: "Tahmelantie",
              },
              city: "Konnevesi",
              state: "Central Finland",
              country: "Finland",
              postcode: 93669,
              coordinates: {
                latitude: "-85.6809",
                longitude: "165.8532",
              },
              timezone: {
                offset: "+5:45",
                description: "Kathmandu",
              },
            },
            email: "elli.wallo@example.com",
            login: {
              uuid: "4edd4d4c-a5a2-4ffc-9e50-eccd12f82816",
              username: "bigkoala579",
              password: "laguna",
              salt: "VX1hj0Fj",
              md5: "1a220b0470eb4301e86d496829050d80",
              sha1: "ace2ea692896ac71ec81456f03a897bbf33e41fb",
              sha256:
                "342c4901a113bf92d8a5a53a9cfe9349ad9fb68b49f66d9b484b224805f94796",
            },
            dob: {
              date: "1947-05-11T06:06:19.272Z",
              age: 76,
            },
            registered: {
              date: "2003-08-24T08:28:04.220Z",
              age: 20,
            },
            phone: "03-911-094",
            cell: "044-238-63-44",
            id: {
              name: "HETU",
              value: "NaNNA668undefined",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/1.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/1.jpg",
              thumbnail:
                "https://randomuser.me/api/portraits/thumb/women/1.jpg",
            },
            nat: "FI",
          },
        ],
      })
    );
  })
);

// Enable request interception.
beforeAll(() => server.listen());

// Reset handlers so that each test could alter them
// without affecting other, unrelated tests.
afterEach(() => server.resetHandlers());

// Don't forget to clean up afterwards.
afterAll(() => server.close());

test("loading followers", async function () {
  render(<MockFollowersList url="/followers" />);

  const firstElement = await screen.findByTestId("follower-item-0");

  //Assert
  expect(firstElement).toBeInTheDocument();
});
