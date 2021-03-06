import React, { FC } from "react";
import { Badge, BadgeContainer } from "@react-md/badge";
import { Button } from "@react-md/button";
import { NotificationsSVGIcon } from "@react-md/material-icons";
import { Text } from "@react-md/typography";

import { COPYRIGHT } from "constants/unicode";

import styles from "./CustomizingBadges.module.scss";

const CustomizingBadges: FC = () => (
  <>
    <BadgeContainer className={styles.container}>
      {/* since the badge is presentational, don't add the `aria-describedby` value */}
      <Text>Some amazing product</Text>
      <Badge id="copyright-badge" theme="clear">
        {COPYRIGHT}
      </Badge>
    </BadgeContainer>
    {/* this is _basically_ the `BadgedButton` component except with an extra `<span>` */}
    <BadgeContainer className={styles.custom}>
      <Button
        id="custom-badged-button"
        aria-describedby="custom-badged-button-badge"
        buttonType="icon"
      >
        <NotificationsSVGIcon />
      </Button>
      <Badge id="custom-badged-button-badge">8</Badge>
    </BadgeContainer>
  </>
);

export default CustomizingBadges;
