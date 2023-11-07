import React, { memo } from "react";
import Image from "next/image";
import CN from "classnames";
import Vehicle from "@/types/vehicle";
import { FaCamera, FaRegHeart, FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlineDashboard, AiOutlineClockCircle } from "react-icons/ai";
import { GiThorHammer } from "react-icons/gi";
import { BsFillPinAngleFill } from "react-icons/bs";
import { getRemainingDate } from "@/utils";

import Tag from "../Tag";
import styles from "./product.module.css";
import Icon from "../Icon";

type Props = {
  vehicle: Vehicle;
};

const Product = ({ vehicle }: Props) => {
  return (
    <div
      className={CN(styles.productCard, {
        [styles.outBidded]: vehicle.outBidded,
        [styles.topBidded]: vehicle.IsExclusive,
      })}
    >
      <div className={styles.productHeader}>
        {vehicle.IsExclusive && (
          <div className={styles.binTag}>
            <BsFillPinAngleFill />
          </div>
        )}
        <div className={styles.lotFlag}>Lot#{vehicle.Lot}</div>
        <Image
          className={styles.productHeaderImage}
          src={String(vehicle?.MainImage).replace("w_[w],h_[h]", "h_150")}
          alt="Next.js Logo"
          fill
        />
      </div>
      <div className={styles.productBody}>
        <div className={CN(styles.shortCuts, styles.rowSpacer)}>
          <div>
            {+vehicle.Bids > 0 && vehicle.IsExclusive && (
              <Tag success>Heighest Bidder</Tag>
            )}
            {+vehicle.Bids > 0 && vehicle.outBidded && (
              <Tag danger>outBidded</Tag>
            )}
          </div>
          <div className="flex">
            <Icon>
              <FaCamera />
            </Icon>
            <Icon>
              <FaRegHeart />
            </Icon>
            <Icon>
              <FaEllipsisVertical />
            </Icon>
          </div>
        </div>
        <div className={styles.rowSpacer}>
          <h3 className={styles.productTitle}>{vehicle.Title}</h3>
          <div className="flex" style={{ gap: 5 }}>
            <Tag>
              <AiOutlineDashboard /> {vehicle.OdometerStr}
            </Tag>
            <Tag success light>
              <AiOutlineDashboard />
              Low Mileage
            </Tag>
          </div>
        </div>
        <div className={styles.timeBidsWrapper}>
          <div className={styles.time}>
            <AiOutlineClockCircle />
            {getRemainingDate(vehicle.EndDateTimestamp)}
          </div>
          <div className={styles.bids}>
            <GiThorHammer />
            {vehicle.Bids}
          </div>
        </div>
        <div className={styles.rowSpacer}>
          <div className={styles.price}>
            <span className={styles.currency}>{vehicle.Currency}</span>
            {vehicle.CurrentPriceStr}
          </div>
          <button
            className={CN("filled", styles.bidButton, {
              secondary: +vehicle.Bids === 0,
            })}
          >
            <GiThorHammer />
            {+vehicle.Bids === 0 ? "Bid Now" : "Bid Again"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Product);
