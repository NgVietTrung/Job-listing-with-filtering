import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
import KeywordFilter from './components/Keyword/KeywordFilter';
import classes from './App.module.css';
import { dummyData } from './store/data';

function App() {
	const [data, setData] = useState(dummyData);
	const [keywords, setKeywords] = useState([]);

	useEffect(() => {
		const checkKeyword = (item) => {
			const emptyArr = [];
			const role = item.role;
			const level = item.level;
			const languages = [...item.languages];
			const tools = [...item.tools];

			emptyArr.push(role, level);
			const listKeyword = emptyArr.concat(languages, tools);
			return keywords.every((keyword) => listKeyword.indexOf(keyword) > -1);
		};

		const newData = dummyData.filter((item) => {
			return checkKeyword(item);
		});
		setData(newData);
	}, [keywords]);

	const clearKeywordsHandler = () => {
		setKeywords([]);
	};

	const removeKeywordHandler = (selectedKeyword) => {
		const newKeywords = keywords.filter(
			(keyword) => keyword !== selectedKeyword
		);
		setKeywords(newKeywords);
	};

	const addKeywordHandler = (selectedKeyword) => {
		if (keywords.includes(selectedKeyword)) {
			return;
		} else {
			const tempArr = [...keywords];
			tempArr.push(selectedKeyword);
			setKeywords(tempArr);
		}
	};

	return (
		<div>
			<Header />
			<div className={classes.main}>
				{keywords.length > 0 && (
					<KeywordFilter
						keywords={keywords}
						onClear={clearKeywordsHandler}
						onRemove={removeKeywordHandler}
					/>
				)}
				<Items data={data} onAdd={addKeywordHandler} />
			</div>
		</div>
	);
}

export default App;
