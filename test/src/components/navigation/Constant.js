import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons"
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons"
export const NavigationBreadcrumbs = Object.freeze({
    CAMPAIGNLIST: {
        label: "List",
        href:  "/",
        icon:  <FontAwesomeIcon icon={faListAlt} />
    },
    DASHBOARD: {
        label: "Dashboard",
        href: "/campaigns",
        icon:  <FontAwesomeIcon icon={faTachometerAlt} />
    }
})