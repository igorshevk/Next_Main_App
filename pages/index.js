import React from "react";
import NameField from "../components/utility/NameField";
import TextInput from "../components/utility/TextInput";
import CustomButton from "../components/utility/CustomButton";
import SquareCustomButton from "../components/utility/SquareCustomButton";
import HorizonItem from "../components/utility/HorizonItem";

import {
  ContentContainer,
  MainContainer,
  NameContainer,
  NameItemsContainer,
  NameDetailsContainer,
  Label,
  TextArea,
  HorizonContainer,
  HorizomContainerWrapper,
  ButtonWrapper,
  ButtonHorizonWrapper,
  LabelsWrapper,
  TitleLabel,
  Title2Label,
  FormWrapper,
} from "../components/layout";

export default function Home() {
  const [focus, setFocus] = React.useState({});

  const nameItems = [
    {
      id: "XSDIWKLS2",
      name: "Alex",
      color: "green",
      icon: "tick",
      stringvalues: ["Apple", "Banana", "Tomato"],
    },
    {
      id: "XSDIWKLS1",
      name: "Oleg",
      color: "orange",
      icon: "tick",
      stringvalues: ["Car", "Desk", "One"],
    },
    {
      id: "XSDIWKLS3",
      name: "Kevin",
      color: "red",
      icon: "tick",
      stringvalues: ["Two", "Three", "One"],
    },
    {
      id: "XSDIWKLS4",
      name: "Lina",
      color: "green",
      icon: "tick",
      stringvalues: ["Fore", "Five", "Six"],
    },
    {
      id: "XSDIWKLS5",
      name: "Anna",
      color: "green",
      icon: "tick",
      stringvalues: ["Seven", "Eight", "Nine"],
    },
    {
      id: "XSDIWKLS6",
      name: "Jhon",
      color: "green",
      icon: "tick",
      stringvalues: ["Ten", "Eleven", "One"],
    },
    {
      id: "XSDIWKLS7",
      name: "Wang",
      color: "red",
      icon: "tick",
      stringvalues: ["Orange", "Green", "Red"],
    },
    {
      id: "XSDIWKLS8",
      name: "Choi",
      color: "red",
      icon: "tick",
      stringvalues: ["Riger", "Legal", "Shop"],
    },
    {
      id: "XSDIWKLS9",
      name: "Oscar",
      color: "orange",
      icon: "times",
      stringvalues: ["Store", "Market", "Site"],
    },
    {
      id: "XSDIWKLw2",
      name: "Luna",
      color: "orange",
      icon: "times",
      stringvalues: ["Mood", "Note", "One"],
    },
    {
      id: "XSDIWKLw3",
      name: "Geroge",
      color: "orange",
      icon: "circle",
      stringvalues: ["Hiru", "Soso", "Haha"],
    },
    {
      id: "XSDIWKLw4",
      name: "Walter",
      color: "orange",
      icon: "tick",
      stringvalues: ["Poly", "Leete", "Kick"],
    },
  ];
  const horizonItems = [
    {
      title: "Video",
      locked: false,
      component_id: 212131,
    },
    {
      title: "MCQ",
      locked: false,
      component_id: 122131,
    },
    {
      title: "Questions",
      locked: false,
      component_id: 2456431,
    },
    {
      title: "Animation",
      locked: true,
      component_id: 2678631,
    },
    {
      title: "Video",
      locked: true,
      component_id: 27981,
    },
    {
      title: "Title 2",
      locked: true,
      component_id: 2145731,
    },
    {
      title: "Questions",
      locked: false,
      component_id: 2456431,
    },
    {
      title: "Animation",
      locked: true,
      component_id: 2678631,
    },
    {
      title: "Video",
      locked: true,
      component_id: 27981,
    },
    {
      title: "Title 2",
      locked: true,
      component_id: 2145731,
    },
  ];
  const handleClick = async (e) => {
    const id = e.target.id;
    const focusItem = await nameItems.filter((item) => item.id == id)[0];
    setFocus(focusItem);
  };
  const length = parseInt(nameItems.length / 3) + 1;
  return (
    <ContentContainer imgUrl={process.env.public_url + "background.png"}>
      <MainContainer>
        <LabelsWrapper>
          <TitleLabel>All Participants</TitleLabel>
          <Title2Label>Selected Participant</Title2Label>
        </LabelsWrapper>
        <NameContainer>
          <NameItemsContainer length={length}>
            {nameItems.map((item, key) => (
              <NameField
                key={key}
                id={item.id}
                item={item}
                onClick={handleClick}
              />
            ))}
          </NameItemsContainer>
          <NameDetailsContainer>
            <Label>Name: {focus && focus.name && focus.name} </Label>
            <Label>Status: {focus && focus.name && "True"} </Label>
            <TextArea
              value={focus && focus.name && focus.stringvalues.join("\n")}
            />

            <FormWrapper>
              <TextInput width="100%" />
              <SquareCustomButton title="Button" width="20%" />
            </FormWrapper>
          </NameDetailsContainer>
        </NameContainer>
        <TitleLabel>Section details</TitleLabel>
        <HorizomContainerWrapper>
          <HorizonContainer>
            {horizonItems.map((item, key) => (
              <HorizonItem
                key={key}
                title={item.title}
                locked={item.locked}
                id={item.id}
              />
            ))}
          </HorizonContainer>
          <ButtonHorizonWrapper>
            <CustomButton title="lock previous" width="80%" />
            <CustomButton title="lock next" width="80%" />
          </ButtonHorizonWrapper>
        </HorizomContainerWrapper>
      </MainContainer>
    </ContentContainer>
  );
}
