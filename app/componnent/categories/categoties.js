'use client'
import Container from "../container/container";
import { subjects } from '../utils/static.data.js';
import CategoryBox from "./categoryBox";

export function Categories() {
 

    return (
        <Container>

            <div className="pt-3 pb-3 flex flex-row items-center justify-between overflow-x-auto scrollbar-hide">
               {
                subjects.map((item)=>(
                    <CategoryBox
                    key={item.label}
                    label={item.label}
                    description={item.description}
                    icon={item.icon}
                    />
                ))
               }
            </div>
        </Container>

    );
}