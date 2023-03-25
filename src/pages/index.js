import { useState } from "react";
import TextInput from "../components/TextInput";
import SingleOptionInput from "../components/SingleOptionInput";
import MultipleOptionInput from "../components/MultipleOptionInput";
import DropDown from "../components/DropDown";
import ProgressBar from "../components/ProgressBar";
import styles from "@/styles/Home.module.css";

const industries = ["Please select", "Accounting", "Airlines/Aviation", "Alternative Dispute Resolution", "Alternative Medicine", "Animation", "Apparel & Fashion", "Architecture & Planning", "Arts and Crafts", "Automotive", "Aviation & Aerospace", "Banking", "Biotechnology", "Broadcast Media", "Building Materials", "Business Supplies and Equipment", "Capital Markets", "Chemicals", "Civic & Social Organization", "Civil Engineering", "Commercial Real Estate", "Computer & Network Security", "Computer Games", "Computer Hardware", "Computer Networking", "Computer Software", "Construction", "Consumer Electronics", "Crypto", "Consumer Goods", "Consumer Services", "Cosmetics", "Dairy", "Defense & Space", "Design", "Edtech", "Education Management", "E-Learning", "Electrical/Electronic Manufacturing", "Entertainment", "Environmental Services", "Events Services", "Executive Office", "Facilities Services", "Farming", "Financial Services", "Fine Art", "Fishery", "Food & Beverages", "Food Production", "Fund-Raising", "Furniture", "Gambling & Casinos", "Glass, Ceramics & Concrete", "Government Administration", "Government Relations", "Graphic Design", "Health, Wellness and Fitness", "Higher Education", "Hospital & Health Care", "Hospitality", "Human Resources", "Import and Export", "Individual & Family Services", "Industrial Automation", "Information Services", "Information Technology and Services", "Insurance", "International Affairs", "International Trade and Development", "Internet", "Investment Banking", "Investment Management", "Judiciary", "Law Enforcement", "Law Practice", "Legal Services", "Legislative Office", "Leisure, Travel & Tourism", "Libraries", "Logistics and Supply Chain", "Luxury Goods & Jewelry", "Machinery", "Management Consulting", "Maritime", "Marketing and Advertising", "Market Research", "Mechanical or Industrial Engineering", "Media Production", "Medical Devices", "Medical Practice", "Mental Health Care", "Military", "Mining & Metals", "Motion Pictures and Film", "Museums and Institutions", "Music", "Nanotechnology", "Newspapers", "Nonprofit Organization Management", "Oil & Energy", "Online Media", "Outsourcing/Offshoring", "Package/Freight Delivery", "Packaging and Containers", "Paper & Forest Products", "Performing Arts", "Pharmaceuticals", "Philanthropy", "Photography", "Plastics", "Political Organization", "Primary/Secondary Education", "Printing", "Professional Training & Coaching", "Program Development", "Public Policy", "Public Relations and Communications", "Public Safety", "Publishing", "Railroad Manufacture", "Ranching", "Real Estate", "Recreational Facilities and Services", "Religious Institutions", "Renewables & Environment", "Research", "Restaurants", "Retail", "Security and Investigations", "Semiconductors", "Shipbuilding", "Sporting Goods", "Sports", "Staffing and Recruiting", "Supermarkets", "Telecommunications", "Textiles", "Think Tanks", "Tobacco", "Translation and Localization", "Transportation/Trucking/Railroad", "Utilities", "Venture Capital & Private Equity", "Veterinary", "Warehousing", "Wholesale", "Wine and Spirits", "Wireless", "Writing and Editing"];

const Index = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    industry: "",
    currentRole: "",
    phoneNumber: "",
    email: "",
    professionalGoals: [],
  });
  const [step, setStep] = useState(0);

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      setStep(steps[step].nextStep);

    };
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  console.log(formData, "FormDAta");
  const handleSingleOptionChange = (value) => {
    setFormData((prevFormData) => ({ ...prevFormData, currentRole: value }));
  };

  const handleMultipleOptionChange = (selectedOptions) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      professionalGoals: selectedOptions,
    }));
  };

  const steps = [
    {

      component: (
        <TextInput
          name="firstName"
          question="What's your first name?"
          value={formData.firstName}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          step={1}
          required
        />
      ),
      nextStep: 1,
    },
    {
      component: (
        <TextInput
          name="lastName"
          question={`and your last name, ${formData.firstName}?`}
          value={formData.lastName}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          step={2}
          required
        />
      ),
      nextStep: 2,
    },
    {
      component: (
        <DropDown

          question="What industry is your company in"
          options={industries}
          value={formData.industry}
          onChange={(value) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              industry: value,
            }))
          }
          }
          onKeyDown={handleKeyDown}
        />
      ),
      nextStep: 3,
    },
    {
      component: (
        <SingleOptionInput
          question="Your role in your company?"
          options={[
            { label: "Product", value: "product" },
            { label: "Founder", value: "founder" },
            { label: "Marketing", value: "marketing" },
            { label: "VC", value: "vc" },
            { label: "Other", value: "other" },
          ]}
          value={formData.currentRole}
          onChange={handleSingleOptionChange}
          onKeyDown={handleKeyDown}
        />
      ),
      nextStep: 4,
    },


    {
      component: (
        <MultipleOptionInput
          question="hey, what's your professional goal for the next 12 months?"
          options={[
            { label: "Get hired", value: "getHired" },
            { label: "Get promoted", value: "getPromoted" },
            { label: "Connect with like-minded people", value: "connectWithLikeMindedPeople" },
            { label: "Structured approach to growth", value: "structuredApproachToGrowth" },
            { label: "Build a growth team", value: "buildAGrowthTeam" },
          ]}
          value={formData.professionalGoals}
          onChange={handleMultipleOptionChange}
          onKeyDown={handleKeyDown}
          limit={2}
        />
      ),
      nextStep: 5,
    },
    {
      component: (
        <TextInput
          name="email"
          question={`email you'd like to register with`}
          value={formData.email}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          required
        />
      ),
      nextStep: 6,
    },
    {
      component: (
        <TextInput
          name="phoneNumber"
          question="What is your phone number?"
          value={formData.phoneNumber}
          onKeyDown={handleKeyDown}
          required
          onChange={handleInputChange}
        />
      ),
      nextStep: 7,
    },
  ];

  return (
    <div className={styles.container}>
      <img src="/images/logo.png" alt="GrowthX Logo" id="logo" />
      <ProgressBar step={step} totalSteps={steps.length} />
      {steps[step]?.nextStep <= 7 ? <div className={styles.formContainer}>
        {steps[step].component}
        <button onClick={() => setStep(steps[step].nextStep)}>Next</button>
      </div> : <div>
        <h1>FINAL DATA</h1>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Industry: {formData.industry}</p>
        <p>Current Role: {formData.currentRole}</p>
        <p>Phone Number: {formData.phoneNumber}</p>
        <p>Email: {formData.email}</p>
        <p>Professional Goals:</p>
        <ul>
          {formData.professionalGoals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ul>
      </div>}
    </div>
  );
};

export default Index;