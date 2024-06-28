import React from "react"

import { useSearchParams } from "next/navigation"

import "./single-show.css"
import SingleShowShowcase from "@/components/SingleShowShowcase"
import Trailer from "@/components/Trailer"
import ShowDescription from "@/components/ShowDescription"
import CallToActionButtons from "@/components/CallToActionButtons"
import RelatedShows from "@/components/RelatedShows"

type TSingleShow = {
  categoryName: string
  showId: string
}

const SingleShowPage = ({ params }: { params: TSingleShow }) => {
  const showId = params?.showId
  return (
    <>
      <SingleShowShowcase showId={showId} />
      <Trailer />
      <ShowDescription showId={showId} />
      <CallToActionButtons />
      <RelatedShows />
    </>
  )
}

export default SingleShowPage
