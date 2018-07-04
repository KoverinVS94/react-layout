// tslint:disable:max-line-length
import * as React from "react";

export const PreloaderMarkup: React.SFC<{ className?: string }> = (props): JSX.Element => (
    <div className={props.className}>
        <div className="lds-css ng-scope">
            <div className="lds-ripple">
                <div />
                <div />
            </div>
        </div>
    </div>
);
