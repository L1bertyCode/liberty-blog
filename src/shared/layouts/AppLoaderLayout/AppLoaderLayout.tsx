import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./AppLoaderLayout.module.scss";
import { MainLayout } from "../MainLayout";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";

interface AppLoaderLayoutProps {
  className?: string;
}

export const AppLoaderLayout = memo((props: AppLoaderLayoutProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <MainLayout
      className={classNames(s.appLoaderLayout, {}, [className])}
      header={
        <HStack className={s.header}>
          <Skeleton
            width={"40px"}
            height={"40px"}
            border={"50%"}
          />
        </HStack>
      }
      content={
        <VStack gap="16" className={s.content}>
          <Skeleton
            width={"70%"}
            height={"32px"}
            border={"16px"}
          />
          <Skeleton
            width={"40%"}
            height={"20px"}
            border={"16px"}
          />
          <Skeleton
            width={"50%"}
            height={"20px"}
            border={"16px"}
          />
          <Skeleton
            width={"30%"}
            height={"32px"}
            border={"16px"}
          />
          <Skeleton
            width={"80%"}
            height={"40%"}
            border={"16px"}
          />
          <Skeleton
            width={"80%"}
            height={"40%"}
            border={"16px"}
          />
        </VStack>
      }
      sidebar={
        <Skeleton
          width={"220px"}
          height={"100%"}
          border={"32px"}
        />
      }
    />
  );
});
