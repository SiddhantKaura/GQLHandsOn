import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { Layout, QueryResult } from "../components";
import { useParams } from "react-router-dom";
import TrackDetail from "../components/track-detail";

const TRACK = gql`
  query Track($id: ID!) {
    track(id: $id) {
      id
      modules {
        id
        length
        title
      }
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
      description
      numberOfViews
    }
  }
`;

const Track = () => {
  const { trackId } = useParams();
  const { data, loading, error } = useQuery(TRACK, {
    variables: { id: trackId },
  });
  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
