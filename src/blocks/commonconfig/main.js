const { __ } = wp.i18n
const { addFilter } = wp.hooks
const { createHigherOrderComponent } = wp.compose
import immutableUpdate from 'immutable-update'
const { 
  select,
  dispatch
} = wp.data
const {
  useEffect,
  useReducer
} = wp.element
const { 
  InspectorControls 
} = wp.blockEditor
const { 
  Panel, 
  PanelBody, 
  PanelRow, 
  Disabled,
  ToggleControl,
  RangeControl,
  TextControl,
  ColorIndicator,
  Button,
  SelectControl
} = wp.components

addFilter(
	'blocks.registerBlockType',
	'poeticsoft/block/comonconfigatributes',
	settings => { 

    let newSettings = {
      supports: {
        anchor: true,
        customClassName: true,
        html: false,
        defaultStylePicker: false
      }
    }

    /* Core */

    // Button

    if(
      [          
        'core/button'
      ].includes(settings.name)
    ) {

      newSettings = immutableUpdate(
        newSettings,
        {
          parent: [
            'core/buttons',
            'core/group',
            'core/cover'
          ]
        }
      )
    }

    /* Content type */
    
    return immutableUpdate(
      settings,
      newSettings
    )
  }
)

addFilter(
  'editor.BlockEdit',
  'poeticsoft/block/commonconfig',
  createHigherOrderComponent(
    BlockEdit => props => { 

      const [ localstate, localdispatch ] = useReducer(
        (state, action) => {

          let kpis, newkpis, index, data

          switch(action.type) {

            default:

              return immutableUpdate(
                state,
                action
              )
          }
        },
        {
          
        }
      )

      useEffect(() => {

        // 
        
      }, []) 

      return <>
        {
          (
            (
              [
                'core/group'
              ].includes(props.name)
              &&
              props.attributes.className
              &&
              props.attributes.className
              .includes('dialogslide')
            )
          ) ?
          <InspectorControls>
            <PanelBody
              title={ __('POETICSOFT') }
              initialOpen={ true }
            >              
              
            </PanelBody>
          </InspectorControls>
          :
          <></>
        }
        <BlockEdit { ...props } />
      </>
    }, 
    'withInspectorControl'
  )
)