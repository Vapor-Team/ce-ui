/**
 * Create a component with common options
 */
import createBasic from "./create-basic"
import BaseCard from "../components/base-card"
import Icon from "../components/icon"
import Button from "../components/button"
export default function (sfc) {
	sfc.props = Object.assign(sfc.props || {}, BaseCard.props)
	sfc.components = Object.assign(sfc.components || {}, {
		BaseCard,
		Icon,
		Button
	})
	sfc.inheritAttrs = false
	return createBasic(sfc)
}
