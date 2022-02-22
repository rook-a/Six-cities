import { Link, generatePath } from 'react-router-dom';

import Bookmark from '../boormark/boormark';
import { Offer } from '../../types/offer';
import { ratingPercent } from '../../const';

interface CardPlaceProp {
  offer: Offer;
}

function CardPlace({ offer }: CardPlaceProp): JSX.Element {
  const link = generatePath('/offer/:id', { id: offer.id.toString() });

  const { description, type, price, isFavorite, previewImage, title, rating, id } = offer;

  return (
    <article className="cities__place-card place-card" id={`${id}`}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={link} title="Show offer">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={description} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark isSmall isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingPercent(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={link} title="Show offer">
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CardPlace;
