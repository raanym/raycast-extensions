import { LaunchProps, open } from "@raycast/api";
import { buildChatGptUrl } from "./utils/search-urls";

interface Arguments {
  query: string;
}

export default async function Command(
  props: LaunchProps<{ arguments: Arguments }>,
) {
  const { query } = props.arguments;
  await open(buildChatGptUrl(query), "com.apple.Safari");
}
