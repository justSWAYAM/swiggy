import Contact from "../Contact";
import { render ,screen} from "@testing-library/react";
import '@testing-library/jest-dom';

describe("Contact us Page test cases",()=>{

    test("Should check if contact page is loaded ",() =>{
        render(<Contact/>);
        const paragraph = screen.getByRole("paragraph");
         expect(paragraph).toBeInTheDocument();
     
     });
     test("Should check if the button is working ",() =>{
         render(<Contact/>);
         const button = screen.getByRole("button");
          expect(button).toBeInTheDocument();
      
      });
     
      test("Should check if the input box is working ",() =>{
         render(<Contact/>);
     
         // Querying 
         const input = screen.getAllByRole("textbox");
     
         // Assertion 
          expect(input.length).toBe(2);
      
      });
});
