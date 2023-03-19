import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@elementor/ui';

const TabletLandscapeIcon = React.forwardRef( ( props: SvgIconProps, ref ) => {
	return (
		<SvgIcon viewBox="0 0 24 24" { ...props } ref={ ref }>
			<path fillRule="evenodd" clipRule="evenodd" d="M4.61111 5.75C3.92825 5.75 3.25 6.3865 3.25 7.33333L3.25 16.6667C3.25 17.6135 3.92825 18.25 4.61111 18.25L19.3889 18.25C20.0718 18.25 20.75 17.6135 20.75 16.6667V13.7073C20.6718 13.735 20.5877 13.75 20.5 13.75C20.0858 13.75 19.75 13.4142 19.75 13V11C19.75 10.5858 20.0858 10.25 20.5 10.25C20.5877 10.25 20.6718 10.265 20.75 10.2927V7.33333C20.75 6.3865 20.0718 5.75 19.3889 5.75L4.61111 5.75ZM1.75 7.33333C1.75 5.70284 2.96211 4.25 4.61111 4.25L19.3889 4.25C21.0379 4.25 22.25 5.70284 22.25 7.33333V16.6667C22.25 18.2972 21.0379 19.75 19.3889 19.75L4.61111 19.75C2.96211 19.75 1.75 18.2972 1.75 16.6667L1.75 7.33333Z" />
		</SvgIcon>
	);
} );

export default TabletLandscapeIcon;