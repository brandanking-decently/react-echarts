// Hooks
import { useECharts } from './use-echarts'

// Types
import type { UseEChartsOptions } from './use-echarts'
import type { FC, HTMLAttributes } from 'react'

type ContainerProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	| 'title'
	| 'onClick'
	| 'onDoubleClick'
	| 'onMouseDown'
	| 'onMouseMove'
	| 'onMouseOut'
	| 'onMouseOver'
>
export type EChartProps = ContainerProps & UseEChartsOptions

export const EChart: FC<EChartProps> = ({
	// Init
	devicePixelRatio,
	height,
	locale,
	pointerSize,
	renderer,
	theme,
	use,
	useCoarsePointer,
	useDirtyRect,
	width,

	// eChartsInstance
	group,

	// SetOption
	lazyUpdate,
	notMerge,
	replaceMerge,
	silent,
	transition,
	darkMode,
	media,
	options,
	stateAnimation,

	// Option
	angleAxis,
	animation,
	animationDelay,
	animationDelayUpdate,
	animationDuration,
	animationDurationUpdate,
	animationEasing,
	animationEasingUpdate,
	animationThreshold,
	aria,
	axisPointer,
	backgroundColor,
	blendMode,
	brush,
	calendar,
	color,
	dataZoom,
	dataset,
	geo,
	graphic,
	grid,
	hoverLayerThreshold,
	legend,
	parallel,
	parallelAxis,
	polar,
	progressive,
	progressiveThreshold,
	radar,
	radiusAxis,
	series,
	singleAxis,
	textStyle,
	timeline,
	title,
	toolbox,
	tooltip,
	useUTC,
	visualMap,
	xAxis,
	yAxis,

	// Events
	onAxisAreaSelected,
	onBrush,
	onBrushEnd,
	onBrushSelected,
	onClick,
	onContextMenu,
	onDataRangeSelected,
	onDataViewChanged,
	onDataZoom,
	onDoubleClick,
	onDownplay,
	onFinished,
	onGeoSelectChanged,
	onGeoSelected,
	onGeoUnselected,
	onGlobalCursorTaken,
	onGlobalOut,
	onHighlight,
	onLegendInverseSelect,
	onLegendScroll,
	onLegendSelectChanged,
	onLegendSelected,
	onLegendUnselected,
	onMagicTypeChanged,
	onMouseDown,
	onMouseMove,
	onMouseOut,
	onMouseOver,
	onRendered,
	onRestore,
	onSelectChanged,
	onTimelineChanged,
	onTimelinePlayChanged,

	...rest
}) => {
	const [ref] = useECharts<HTMLDivElement>({
		// Init
		devicePixelRatio,
		height,
		locale,
		pointerSize,
		renderer,
		theme,
		use,
		useCoarsePointer,
		useDirtyRect,
		width,

		// eChartsInstance
		group,

		// SetOption
		lazyUpdate,
		notMerge,
		replaceMerge,
		silent,
		transition,
		darkMode,
		media,
		options,
		stateAnimation,

		// Option
		angleAxis,
		animation,
		animationDelay,
		animationDelayUpdate,
		animationDuration,
		animationDurationUpdate,
		animationEasing,
		animationEasingUpdate,
		animationThreshold,
		aria,
		axisPointer,
		backgroundColor,
		blendMode,
		brush,
		calendar,
		color,
		dataZoom,
		dataset,
		geo,
		graphic,
		grid,
		hoverLayerThreshold,
		legend,
		parallel,
		parallelAxis,
		polar,
		progressive,
		progressiveThreshold,
		radar,
		radiusAxis,
		series,
		singleAxis,
		textStyle,
		timeline,
		title,
		toolbox,
		tooltip,
		useUTC,
		visualMap,
		xAxis,
		yAxis,

		// Events
		onAxisAreaSelected,
		onBrush,
		onBrushEnd,
		onBrushSelected,
		onClick,
		onContextMenu,
		onDataRangeSelected,
		onDataViewChanged,
		onDataZoom,
		onDoubleClick,
		onDownplay,
		onFinished,
		onGeoSelectChanged,
		onGeoSelected,
		onGeoUnselected,
		onGlobalCursorTaken,
		onGlobalOut,
		onHighlight,
		onLegendInverseSelect,
		onLegendScroll,
		onLegendSelectChanged,
		onLegendSelected,
		onLegendUnselected,
		onMagicTypeChanged,
		onMouseDown,
		onMouseMove,
		onMouseOut,
		onMouseOver,
		onRendered,
		onRestore,
		onSelectChanged,
		onTimelineChanged,
		onTimelinePlayChanged
	})

	return <div {...rest} ref={ref} />
}
