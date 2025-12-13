/**
 * Feature Cards Block - Edit Component
 * Functional React component for editing Feature Cards in the block editor
 * Supports inline editing, card management, and dynamic layout configuration
 */

import { useState } from 'react';
import {
	InspectorControls,
	RichText,
	BlockControls,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	ToggleControl,
	SelectControl,
	Button,
	ButtonGroup,
	ColorPalette,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';

/**
 * Edit component for the Feature Cards block
 * @param {Object} props - Block properties
 * @param {Object} props.attributes - Block attributes
 * @param {Function} props.setAttributes - Function to update attributes
 * @param {string} props.clientId - Block client ID
 * @returns {JSX.Element} Block edit interface
 */
const FeatureCardsEdit = ({ attributes, setAttributes, clientId }) => {
	const {
		cards = [],
		columns = 3,
		gap = 'md',
		alignment = 'center',
		enableHover = true,
		cardsPerRow = 3,
		backgroundColor = '#ffffff',
		textColor = '#000000',
		borderRadius = 'md',
	} = attributes;

	const [selectedCard, setSelectedCard] = useState(0);

	const blockProps = useBlockProps({
		className: `feature-cards-block columns-${columns} gap-${gap} align-${alignment}`,
	});

	/**
	 * Update card data
	 * @param {number} index - Card index
	 * @param {string} field - Field to update
	 * @param {*} value - New value
	 */
	const updateCard = (index, field, value) => {
		const updatedCards = [...cards];
		updatedCards[index] = { ...updatedCards[index], [field]: value };
		setAttributes({ cards: updatedCards });
	};

	/**
	 * Add a new card to the block
	 */
	const addCard = () => {
		const newCard = {
			id: Date.now(),
			title: 'New Feature',
			description: 'Feature description goes here',
			icon: 'star',
			iconColor: '#000000',
		};
		setAttributes({ cards: [...cards, newCard] });
		setSelectedCard(cards.length);
	};

	/**
	 * Remove a card from the block
	 * @param {number} index - Card index to remove
	 */
	const removeCard = (index) => {
		const updatedCards = cards.filter((_, i) => i !== index);
		setAttributes({ cards: updatedCards });
		if (selectedCard >= updatedCards.length) {
			setSelectedCard(Math.max(0, updatedCards.length - 1));
		}
	};

	return (
		<>
			<BlockControls>
				<ButtonGroup>
					<Button isPrimary onClick={addCard}>
						Add Card
					</Button>
				</ButtonGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody title="Layout Settings" initialOpen={true}>
					<RangeControl
						label="Cards Per Row"
						value={cardsPerRow}
						onChange={(value) => setAttributes({ cardsPerRow: value })}
						min={1}
						max={4}
					/>
					<SelectControl
						label="Gap Between Cards"
						value={gap}
						onChange={(value) => setAttributes({ gap: value })}
						options={[
							{ label: 'Small', value: 'sm' },
							{ label: 'Medium', value: 'md' },
							{ label: 'Large', value: 'lg' },
						]}
					/>
					<SelectControl
						label="Border Radius"
						value={borderRadius}
						onChange={(value) => setAttributes({ borderRadius: value })}
						options={[
							{ label: 'None', value: 'none' },
							{ label: 'Small', value: 'sm' },
							{ label: 'Medium', value: 'md' },
							{ label: 'Large', value: 'lg' },
						]}
					/>
				</PanelBody>

				<PanelBody title="Styling" initialOpen={false}>
					<ToggleControl
						label="Enable Hover Effect"
						checked={enableHover}
						onChange={(value) => setAttributes({ enableHover: value })}
					/>
					<div className="color-picker-wrapper">
						<p>Background Color</p>
						<ColorPalette
							colors={[
								{ name: 'White', color: '#ffffff' },
								{ name: 'Light Gray', color: '#f3f4f6' },
								{ name: 'Dark Gray', color: '#374151' },
								{ name: 'Black', color: '#000000' },
							]}
							value={backgroundColor}
							onChange={(value) => setAttributes({ backgroundColor: value })}
						/>
					</div>
				</PanelBody>

				<PanelBody title="Card Management" initialOpen={true}>
					{cards.map((card, index) => (
						<div key={card.id} className="card-management-item">
							<Button
								isPrimary={selectedCard === index}
								isSecondary={selectedCard !== index}
								onClick={() => setSelectedCard(index)}
								style={{ marginBottom: '8px', width: '100%' }}
							>
								{card.title || `Card ${index + 1}`}
							</Button>
							{selectedCard === index && (
								<>
									<RichText
										tagName="h3"
										value={card.title}
										onChange={(value) => updateCard(index, 'title', value)}
										placeholder="Feature title"
										allowedFormats={['core/bold', 'core/italic']}
									/>
									<RichText
										tagName="p"
										value={card.description}
										onChange={(value) => updateCard(index, 'description', value)}
										placeholder="Feature description"
										allowedFormats={['core/bold', 'core/italic']}
									/>
									<Button
										isDestructive
										onClick={() => removeCard(index)}
										style={{ marginTop: '8px' }}
									>
										Remove Card
									</Button>
								</>
							)}
						</div>
					))}
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="feature-cards-container">
					{cards.length === 0 ? (
						<div className="feature-cards-placeholder">
							<p>Click "Add Card" to create feature cards</p>
						</div>
					) : (
						cards.map((card, index) => (
							<div
								key={card.id}
								className={`feature-card ${selectedCard === index ? 'selected' : ''}`}
								onClick={() => setSelectedCard(index)}
								role="button"
								tabIndex={0}
							>
								<div className="feature-card-icon">
									<span className={`icon icon-${card.icon}`}></span>
								</div>
								<h3>{card.title || 'Feature Title'}</h3>
								<p>{card.description || 'Feature description'}</p>
							</div>
						))
					)}
				</div>
			</div>
		</>
	);
};

export default FeatureCardsEdit;
