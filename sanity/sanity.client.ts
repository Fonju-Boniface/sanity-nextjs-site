import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "nze15v3p",
  dataset: "production",
  apiVersion: "2023-11-26",
  useCdn: false,
};

const client = createClient(config);

export default client;