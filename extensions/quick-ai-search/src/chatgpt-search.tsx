import { LaunchProps, open } from "@raycast/api";
import { buildChatGptUrl } from "./utils/search-urls";

export default async function Command(
  props: LaunchProps<{ arguments: Arguments.ChatgptSearch }>,
) {
  const { query } = props.arguments;
  await open(buildChatGptUrl(query));
}
