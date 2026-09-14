import React from "react";
import { useParams } from "react-router-dom";
import { Layout, ModuleDetail, QueryResult } from "../components";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const TRACK_AND_MODULE = gql`
  query getTrackAndModule($trackId: ID!, $moduleId: ID!) {
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
    module(id: $moduleId) {
      id
      title
      content
      videoUrl
      length
    }
  }
`;

const Module = () => {
  const { trackId, moduleId } = useParams();
  const { data, loading, error } = useQuery(TRACK_AND_MODULE, {
    variables: { trackId, moduleId },
  });

  return (
    <Layout fullWidth>
      <QueryResult data={data} loading={loading} error={error}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
