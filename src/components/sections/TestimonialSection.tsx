import React from "react";
import Header from "../common/Header";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const appReviewData = [
    {
      id: 0,
      imageUrl: "/images/rayhan.jpg",
      reviewerName: "Rayhan Curran",
      review:
        "Friendly staff, expert care at Esspian. Dr. Smith explained everything, and my smile looks fantastic!",
    },

    {
      id: 1,
      imageUrl: "/images/kayley.jpg",
      reviewerName: "Kayley Frame",
      review:
        "Efficient scheduling, gentle care at Esspian. Hygienists and Dr. Bella were fantastic. Enjoyable dental visits!",
    },
    {
      id: 2,
      imageUrl: "/images/gene.jpg",
      reviewerName: "Gene Whitfield",
      review: "No more dental dread, thanks to Esspian. Pain-free, stress-free care with fantastic results. Grateful for their expertise",
    },
    {
      id: 3,
      imageUrl: "/images/alan.jpg",
      reviewerName: "Allan Kim",
      review:
        "Outstanding service at Esspian Dental. Friendly team, exceptional care. They make you comfortable, and I love my new smile!",
    },
  ];
  return (
    <section className="mt-[9rem]">
      <Header title="testimonials" subtitle="What Clients say about us" />
      <div className="grid grid-cols-1 gap-16  md:grid-cols-2 mt-8 md:mt-[6.75rem]">
        {appReviewData.map((review) => (
          <TestimonialCard
            key={review.id}
            imageUrl={review.imageUrl}
            review={review.review}
            reviewerName={review.reviewerName}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
