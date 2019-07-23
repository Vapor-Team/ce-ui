
/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import createBasic from './create-basic'
import BaseCard from "../components/base-card"
import Button from "../components/button"
import Icon from "../components/icon"
import Loading from "../components/loading"
import TextCard from "../components/text-card"
export default function (sfc) {
	sfc.props = Object.assign(sfc.props || {}, BaseCard.props)
	sfc.components = Object.assign(sfc.components || {}, {
		BaseCard,
		Button,
		Icon,
		Loading,
		TextCard
	})
	sfc.inheritAttrs = false
	return createBasic(sfc)
}