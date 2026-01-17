import { LaunchProps, open } from "@raycast/api";
import {
  buildChatGptUrl,
  buildGoogleAiUrl,
  buildGrokUrl,
  buildPerplexityUrl,
} from "./utils/search-urls";

interface Arguments {
  query: string;
}

export default async function Command(
  props: LaunchProps<{ arguments: Arguments }>,
) {
  const { query } = props.arguments;
  await open(buildGoogleAiUrl(query));
  await open(buildChatGptUrl(query), "com.apple.Safari");
  await open(buildPerplexityUrl(query));
  await open(buildGrokUrl(query));
}
