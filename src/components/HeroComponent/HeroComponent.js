import React from "react";

import CollegeImg from "../../assets/images/college.jpg"
import "./HeroComponent.css"

function HeroComponent({ colleges }) {

    return (
        <div className="component-college-container">
            <img src={CollegeImg} alt="" className="clg-img" />
            <div className="clg-img-overlay" >
                {colleges.promoted &&
                    <div className="clg-promoted">
                        PROMOTED
                </div>
                }
                <div className="rating-container">
                    <div>{colleges.rating} / 5 </div>
                    <div className="college-marking"> {colleges.rating_remarks} </div>
                </div>
                <div className="tag-container flex">
                    {
                        colleges.tags.map(tag =>
                            <div className="tag-holder text-capitalize">{tag}</div>
                        )
                    }
                </div>
                <div className="clg-ranking"># {colleges.ranking}</div>
            </div>
            <div className="content-container">
                <div className="w-full flex">
                    <div className="w-70">
                        <div className="college-name">  {
                            colleges.college_name
                        }</div>
                        <div className="college-address">
                            {
                                colleges.nearest_place.map(
                                    address => <span className="college-nearest-place">{address}</span>
                                )
                            }

                        </div>
                        <div className="flex">
                            <div className="match-percenatge">93% Match : </div>
                            <div className="college-nearest-places"> {
                                colleges.famous_nearest_places
                            }
                            </div>
                        </div>
                        <div className="college-amenties">
                            {colleges.offertext}
                        </div>
                    </div>
                    <div className="w-30">
                        <div className="flex college-amount">
                            <div className="college-original-fees">₹ {colleges.original_fees}</div>
                            <div className="college-discount">{colleges.discount}</div>
                        </div>
                        <div className="college-discounted-fees text-right">₹ {colleges.discounted_fees}</div>
                        <div className="fee-cycle text-right">{colleges.fees_cycle}</div>
                        <div className="text-right">
                            {
                                colleges.amenties.map(
                                    amenties => <span className="college-amentie">{amenties} </span>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroComponent;