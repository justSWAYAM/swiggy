import { render ,screen} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/rescardMOCK.json";
import "@testing-library/jest-dom";

it("Shloud render RestaurantCard component with props data" , () => {
render(<RestaurantCard resData ={MOCK_DATA}/> );

const name = screen.getByText("Pizza Hut");

expect(name).toBeInTheDocument();

});