import { Avatar } from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";

/* 联系方式 */
export const MyContact = () => {
  return (
    <Flex css={{ gap: "$6", py: "$4" }} direction={"row"} align={"center"}>
      {/* https://weibo.com/u/7565123862 */}
      <Avatar squared text="微博" />
      {/* https://twitter.com/geek_dao */}
      <Avatar squared text="推特" />
    </Flex>
  );
};
