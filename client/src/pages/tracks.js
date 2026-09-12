import React from "react";
import { Layout, QueryResult } from "../components";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import TrackCard from "../containers/track-card";

const TRACKS = gql`
  query Tracks {
    tracks {
      id
      length
      modules
      author {
        avatar
        id
        name
      }
      name
      thumbnail
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { data, loading, error } = useQuery(TRACKS);

  return (
    <QueryResult error={error} loading={loading} data={data}>
      <Layout grid>
        {data?.tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}{" "}
      </Layout>
    </QueryResult>
  );
};

export default Tracks;
