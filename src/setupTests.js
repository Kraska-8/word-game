import Enzyme from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

// set up Enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })
