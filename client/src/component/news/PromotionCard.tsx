import React, { useState, useEffect } from "react";
import { promotionData } from "../../util/saleData";
import * as Sales from "../../styles/news/saleApartment.styled";
import { useNavigate } from "react-router-dom";
import Image from "../LazyImage";
import { motion } from "framer-motion";

interface PromotionCardProps {
  data: any;
  idx: number;
}

function PromotionCard({ data, idx }: PromotionCardProps) {
  const { image, status, name, category } = data;
  const [isHovered, setIsHoverd] = useState(false);
  const [delayNum, setDelayNum] = useState(0);
  const hoverEventHandler = () => {
    setIsHoverd(true);
  };
  useEffect(() => {
    return setDelayNum(Math.random() * 0.5);
  }, []);
  const navigate = useNavigate();
  const moveToPage = (idx: number) => {
    navigate(`/news/salesApt/pageDetail?order=${idx}`);
  };

  const imageVariants = {
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: delayNum,
      },
    },
  };
  const textVariants = {
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: delayNum + 0.3,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      variants={imageVariants}
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      <Sales.Card
        onClick={() => moveToPage(idx + 1)}
        onMouseEnter={hoverEventHandler}
      >
        <Sales.CardImageBox>
          <Image src={image} alt={name} />
          {status == "completed" && (
            <Sales.Status translate="no">분양중</Sales.Status>
          )}
          {status == "inspected" && (
            <Sales.Status translate="no">준공후 분양중</Sales.Status>
          )}
          <Sales.BtnBox className="arrow_btn" $active={isHovered}>
            <Sales.ArrowIcon />
          </Sales.BtnBox>
        </Sales.CardImageBox>

        <Sales.CardInfo>
          <motion.div initial={{ opacity: 0, x: 50 }} variants={textVariants}>
            <Sales.CardName>{name}</Sales.CardName>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} variants={textVariants}>
            <Sales.DetailInfo>
              <Sales.Category translate="no">{category}</Sales.Category>
              <Sales.Bar />
              <Sales.InDate>2024.05</Sales.InDate>
            </Sales.DetailInfo>
          </motion.div>
        </Sales.CardInfo>
      </Sales.Card>
    </motion.div>
  );
}

export default PromotionCard;
