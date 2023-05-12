export type SlidePageProps = {
    /**
     * Show the slide count on the slide (defaults to `true`)
     */
    showSlideCount?: boolean;

    /**
     * Show the slide controls on the slide (defaults to `true`)
     */
    showSlideControls?: boolean;

    /**
     * An optional header to display in the top-left of the page
     */
    header?: JSX.Element;

    /**
     * An optional footer to display in the bottom-left of the page
     */
    footer?: JSX.Element;
};