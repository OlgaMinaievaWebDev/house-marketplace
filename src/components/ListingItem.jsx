import { Link } from "react-router-dom";
import deleteIcon from "../assets/svg/deleteIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";

function ListingItem({ listing, id, onDelete }) {
  console.log(listing);
  return (
    <li className="categoryListing">
      <Link
        to={`/category/${listing.type}/${id}`}
        className="categoryListingLink"
      >
        <img
          src={listing.imageUrls[0]}
          alt={listing.name}
          className="categoryListingImg"
        />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{listing.location}</p>
          <p className="categoryListingName">{listing.name}</p>
          <p className="categoryListingPrice">
            ${listing.offer ? listing.discountedPrice : listing.regularPrice}
            {listing.type === "rent" && " / Month"}
          </p>
          <div className="categoryListingInfoDiv">
            <img src={bedIcon} alt="bed" />
            <p className="categoryListingInfoText">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : "1 Bedroom"}
            </p>
            <img src={bathtubIcon} alt="bathtub" />
            <p className="categoryListingInfoText">
              {listing.bathrooms > 1
                ? `${listing.bedrooms} Bathrooms`
                : "1 Bathroom"}
            </p>
          </div>
        </div>
      </Link>
      {onDelete && (
        <img
          src={deleteIcon}
          alt="delete"
          onClick={() => onDelete(listing.id, listing.name)}
        />
      )}
    </li>
  );
}

export default ListingItem;
