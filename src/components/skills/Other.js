import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Other = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Others</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">AI</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Vercel</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Postman</h3>
                            <span className="skills__level">Advance</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">ML</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                     
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Netlify</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Other;