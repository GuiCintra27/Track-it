"use client";
import { useDispatch } from "react-redux";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FormProvider, useForm } from "react-hook-form";

import { Form } from "@/components/UI/form";
import { Title } from "../../components/UI/title";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppSelector } from "@/hooks/useAppSelector";
import { Header } from "../../components/common/header";
import { ChangeProfileData } from "@/lib/types/profile-data";
import { errorToast, successToast } from "@/components/UI/alerts";
import { ProfileImage } from "@/components/UI/profile/profileImage";
import { AppLayout } from "../../components/common/layouts/appLayout";
import { handleChangeProfileForm } from "@/components/infra/fetch-logic/profile";
import { changeProfileDataSchema } from "@/lib/validations/change-profile-data-schema";

export default function Profile() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { apiData, localData } = useAppSelector((state) => state.user);
  const [name, setName] = useState("User");
  const [profileImage, setProfileImage] = useState("/undefined-user.png");

  const changeProfileDataForm = useForm<ChangeProfileData>({
    resolver: zodResolver(changeProfileDataSchema),
    defaultValues: {
      name: "",
      profileImage,
    },
  });

  const { watch, handleSubmit } = changeProfileDataForm;

  const watchProfileImage = watch("profileImage");

  useEffect(() => {
    if (!apiData) redirect("/sign-in");

    if (
      watchProfileImage !== "/undefined-user.png" &&
      watchProfileImage.length > 0
    ) {
      const image = window.URL.createObjectURL(watchProfileImage[0]);
      setProfileImage(image);
    } else {
      if (localData?.profileImage) setProfileImage(localData?.profileImage);
      else if (apiData?.image) setProfileImage(apiData?.image);
    }

    if (localData?.name) setName(localData?.name);
    else if (apiData?.name) setName(apiData?.name);
  }, [localData, apiData, watchProfileImage]);

  const formProps = {
    dispatch,
    localData: localData!,
    apiData: {
      name: apiData ? apiData.name : "",
      profileImage: apiData ? apiData.image : "",
    },
    successToast,
    errorToast,
  };

  return (
    <AppLayout>
      <Header />

      <div className="container">
        <Title.Root className="display-block">
          <Title.Title text={`${t("profile.hello")} ${name},`} />
        </Title.Root>

        <div className="margin-inline">
          <FormProvider {...changeProfileDataForm}>
            <Form.Root
              onSubmit={handleSubmit((data) =>
                handleChangeProfileForm({ data, ...formProps })
              )}
            >
              <ProfileImage profileImage={profileImage} name={"profileImage"} />

              <Form.Input
                id="profileImage"
                name="profileImage"
                type="file"
                accept="image/*"
                className="hidden"
              />
              <Form.Error field="profileImage" />

              <Form.Input
                type="text"
                name="name"
                placeholder={t("profile.new-name")}
              />
              <Form.Error field="name" />

              <Form.Button className="margin-top" type="submit">
                {t("profile.save-changes")}
              </Form.Button>
            </Form.Root>
          </FormProvider>
        </div>
      </div>
    </AppLayout>
  );
}
