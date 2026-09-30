import { ExperienceList } from '../Experience';
import { FoundingExperience as FoundingExperienceData } from '../../constants';

const FoundingExperience = () => (
  <ExperienceList
    id="founding-experience"
    sectionNumber="03. Founding Experience "
    title="Building Visihire"
    sectionDescription="~/founding"
    descriptionSecondLine="solo-built SaaS product"
    items={FoundingExperienceData}
  />
);

export default FoundingExperience;
