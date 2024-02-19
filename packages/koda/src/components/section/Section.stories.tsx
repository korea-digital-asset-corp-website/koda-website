import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import IntroSection from "src/components/section/IntroSection";
import PartnerSection from "src/components/section/PartnerSection";
import Feature1Section from "src/components/section/Feature1Section";
import Feature2Section from "src/components/section/Feature2Section";
import Feature3Section from "src/components/section/Feature3Section";
import KBBankSection from "src/components/section/KBBankSection";
import ConsignmentSection from "src/components/section/ConsignmentSection";
import ServiceADSection from "src/components/section/ServiceADSection";
import NewsSection from "src/components/section/NewsSection";
import QASection from "src/components/section/QASection";
import StructureSection from "src/components/section/StructureSection";
import ProceedingSection from "src/components/section/ProceedingSection";
import DealingSection from "src/components/section/DealingSection";
import ISMSSection from "src/components/section/ISMSSection";

const stories = storiesOf("@Component/Section", module);

stories.add("IntroSection", () => <IntroSection />);

stories.add("PartnerSection", () => <PartnerSection />);

stories.add("Feature1Section", () => <Feature1Section />);

stories.add("Feature2Section", () => <Feature2Section />);

stories.add("Feature3Section", () => <Feature3Section />);

stories.add("KBBankSection", () => <KBBankSection />);

stories.add("ConsignmentSection", () => <ConsignmentSection />);

stories.add("ServiceADSection", () => <ServiceADSection />);

stories.add("NewsSection", () => <NewsSection />);

stories.add("QASection", () => <QASection />);

stories.add("StructureSection", () => <StructureSection />);

stories.add("ProceedingSection", () => <ProceedingSection />);

stories.add("DealingSection", () => <DealingSection />);

stories.add("ISMSSection", () => <ISMSSection />);
