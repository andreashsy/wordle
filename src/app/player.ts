import { Prediction } from "./prediction";

export class Player {
    FIVE_LETTER_WORDS_CONCAT: String = "aback|abate|abbey|abbot|abets|abhor|abide|abler|abode|abort|about|above|abuse|abyss|ached|aches|acids|acing|acorn|acres|acrid|acted|actor|acute|adage|adapt|added|adept|adieu|admit|adobe|adopt|adore|adorn|adult|affix|afoot|after|again|agent|agile|aglow|agony|agree|ahead|aided|aides|ailed|aimed|aired|aisle|alarm|album|alert|algae|alias|alibi|alien|align|alike|alive|allay|alley|allot|allow|alloy|aloft|alone|along|aloof|aloud|alpha|altar|alter|altos|amass|amaze|amber|amble|amend|amiss|ample|amply|amuse|angel|anger|angle|angry|angst|ankle|annex|annoy|annul|antic|anvil|aorta|apart|aping|apple|apply|apron|apter|aptly|arced|areas|arena|argue|arias|arise|armed|aroma|arose|array|arrow|arson|ashed|ashen|ashes|aside|asked|askew|aspen|asses|asset|atlas|atoms|atone|attic|audio|audit|aunts|aural|auras|autos|avail|avert|avoid|avows|await|awake|award|aware|awful|awing|awoke|axing|axiom|axles|azure|babes|backs|bacon|badge|badly|bagel|baggy|bails|baits|baked|baker|bakes|balds|baled|bales|balls|balms|balmy|banal|bands|bandy|bangs|banjo|banks|barbs|bards|bared|barer|bares|barge|barks|barns|baron|based|baser|bases|basic|basil|basin|basis|basks|baste|batch|bathe|baths|baton|bawdy|bawls|bayed|bayou|beach|beads|beady|beaks|beams|beans|beard|bears|beast|beats|beech|beefs|beefy|beers|beets|befit|began|begin|begun|beige|being|belch|belie|bells|belly|below|belts|bench|bends|bents|beret|berry|berth|beset|bests|bible|bides|bigot|biked|bikes|bills|binds|bingo|biped|birch|birds|birth|bison|bitch|bites|blabs|black|blade|blame|bland|blank|blare|blast|blase|blaze|bleak|bleat|bleed|blend|bless|blimp|blind|blink|blips|bliss|blitz|blobs|block|blocs|blogs|blond|blood|bloom|blots|blown|blows|blued|bluer|blues|bluff|blunt|blurb|blurs|blurt|blush|board|boars|boast|boats|boded|bodes|bogus|boils|bolts|bombs|bonds|boned|bones|bonus|booby|booed|books|booms|boons|boors|boost|booth|boots|booty|booze|bored|bores|borne|bosom|bossy|botch|bough|bound|bouts|bowed|bowel|bowls|boxed|boxer|boxes|brace|brags|braid|brain|brake|brand|brash|brass|brats|brave|bravo|brawl|brawn|brays|bread|break|breed|brews|bribe|brick|bride|brief|brims|brine|bring|brink|briny|brisk|broad|broil|broke|brood|brook|broom|broth|brown|brows|brunt|brush|brute|bucks|buddy|budge|buffs|buggy|bugle|build|built|bulbs|bulge|bulks|bulky|bulls|bully|bumps|bumpy|bunch|bunks|bunny|buoys|burly|burns|burnt|burps|burro|burrs|burst|buses|bushy|busts|butte|butts|buxom|buyer|bytes|byway|cabin|cable|cacao|cache|cacti|cadet|cafes|caged|cages|cagey|caked|cakes|calls|calms|calve|camel|cameo|camps|canal|candy|caned|canes|canny|canoe|canon|caped|caper|capes|carat|cards|cared|cares|cargo|carol|carps|carry|carts|carve|cased|cases|casks|caste|casts|catch|cater|caulk|cause|caved|caves|cawed|cease|cedar|ceded|cedes|cello|cells|cents|chafe|chaff|chain|chair|chalk|champ|chant|chaos|chaps|charm|chars|chart|chase|chasm|chats|cheap|cheat|check|cheek|cheep|cheer|chefs|chess|chest|chews|chewy|chick|chide|chief|child|chill|chime|chimp|china|chink|chins|chips|chirp|choir|choke|chops|chord|chore|chose|chows|chuck|chugs|chums|chunk|churn|chute|cider|cigar|cinch|circa|cited|cites|civic|civil|clack|claim|clamp|clams|clang|clank|clans|claps|clash|clasp|class|claws|clean|clear|cleat|clefs|cleft|clerk|click|cliff|climb|clime|cling|clink|clips|cloak|clock|clods|clogs|clone|close|cloth|clots|cloud|clout|clove|clown|clubs|cluck|clued|clues|clump|clung|coach|coals|coast|coats|cobra|cocks|cocky|cocoa|coded|codes|coils|coins|coked|cokes|colds|colic|colon|colts|comas|combs|comes|comet|comic|comma|cones|cooed|cooks|cools|coops|coped|copes|coral|cords|cored|cores|corks|corns|corny|corps|costs|couch|cough|could|count|coups|court|cover|coves|covet|cowed|cower|coyer|crabs|crack|craft|crags|cramp|crams|crane|crank|crash|crass|crate|crave|crawl|craze|crazy|creak|cream|creed|creek|creep|crepe|crept|crest|crews|cribs|cried|cries|crime|crisp|croak|crock|crony|crook|croon|crops|cross|crowd|crown|crows|crude|cruel|crumb|crush|crust|crypt|cubed|cubes|cubic|cuffs|cuing|culls|cults|curbs|curds|cured|cures|curio|curls|curly|curry|curse|curve|cuter|cycle|cynic|cysts|daddy|daily|dairy|daisy|dally|dames|damns|damps|dance|dandy|dared|dares|darns|darts|dated|dates|datum|daubs|daunt|dawns|dazed|dazes|deals|dealt|deans|dears|death|debit|debts|debug|debut|decay|decks|decoy|decry|deeds|deems|deeps|defer|deify|deign|deity|delay|delis|delta|delve|demon|denim|dense|dents|depot|depth|desks|deter|devil|dials|diary|diced|dices|diets|digit|dills|dimer|dimes|dimly|dined|diner|dines|dingy|direr|dirge|dirty|disco|discs|disks|ditch|ditto|ditty|dived|diver|dives|dizzy|docks|dodge|doers|dogma|doily|doing|doled|doles|dolls|dolly|domed|domes|donor|dooms|doors|doped|dopes|dopey|dosed|doses|doted|dotes|doubt|dough|douse|doves|dowdy|downs|downy|dowry|dozed|dozen|dozes|drabs|draft|drags|drain|drama|drank|drape|drawl|drawn|draws|dread|dream|dregs|dress|dried|drier|dries|drift|drill|drink|drips|drive|droll|drone|drool|droop|drops|dross|drove|drown|drugs|drums|drunk|dryer|ducks|ducts|duded|dudes|duels|duets|dukes|dulls|dully|dummy|dumps|dumpy|dunce|dunes|dungs|dunks|dunno|duped|dupes|dusky|dusts|dusty|duvet|dwarf|dwell|dwelt|dying|eager|eagle|earls|early|earns|earth|eased|easel|eases|eaten|eater|eaves|ebbed|ebony|edged|edger|edges|edict|edits|eerie|egged|eight|eject|eking|elbow|elder|elect|elegy|elite|elope|elude|elves|email|embed|ember|emirs|emits|empty|enact|ended|endow|enema|enemy|enjoy|ensue|enter|entry|envoy|epics|epoch|equal|equip|erase|erect|erode|erred|error|erupt|essay|ether|ethic|ethos|evade|evens|event|every|evict|evils|evoke|exact|exalt|exams|excel|exert|exile|exist|exits|expel|extol|extra|exude|exult|fable|faced|faces|facet|facts|faded|fades|fails|faint|fairs|fairy|faith|faked|fakes|falls|false|famed|fancy|fangs|farce|fared|fares|farms|fasts|fatal|fated|fates|fatty|fault|fauna|fawns|fazed|fazes|fears|feast|feats|feeds|feels|feign|feint|fells|felon|felts|fence|fends|ferns|ferry|fetch|feted|fetid|fetus|feuds|fever|fewer|fiche|field|fiend|fiery|fifth|fifty|fight|filch|filed|files|filet|fills|filly|films|filmy|filth|final|finch|finds|fined|finer|fines|fired|fires|firms|first|fishy|fists|fiver|fives|fixed|fixes|fizzy|flags|flail|flair|flake|flaky|flame|flank|flaps|flare|flash|flask|flats|flaws|fleas|fleck|flees|fleet|flesh|flick|flied|flies|fling|flint|flips|flirt|flits|float|flock|flogs|flood|floor|flops|flora|floss|flour|flout|flown|flows|flues|fluff|fluid|fluke|flung|flunk|flush|flute|foals|foams|foamy|focal|focus|foggy|foils|foist|folds|folks|folly|fonts|foods|fools|foots|foray|force|fords|fores|forge|forgo|forks|forms|forte|forth|forts|forty|forum|fouls|found|fount|fours|fowls|foxed|foxes|foyer|frail|frame|franc|frank|fraud|frays|freak|freed|freer|frees|fresh|frets|friar|fried|fries|frill|frisk|frock|frogs|frond|front|frost|froth|frown|froze|fruit|fudge|fuels|fulls|fully|fumed|fumes|funds|fungi|funny|furls|furry|fused|fuses|fussy|fuzzy|fêtes|gable|gaily|gains|gaits|galas|gales|galls|gamed|gamer|games|gamma|gamut|gangs|gaped|gapes|garbs|gases|gasps|gated|gates|gaudy|gauge|gaunt|gauze|gavel|gawks|gawky|gayer|gazed|gazes|gears|geese|gelds|genes|genie|genii|genre|gents|genus|germs|ghost|ghoul|giant|giddy|gifts|gilds|gills|gilts|gimme|girls|girth|given|gives|glade|glads|gland|glare|glass|glaze|gleam|glean|glens|glide|glint|gloat|globe|gloom|glory|gloss|glove|glows|glued|glues|gluts|gnarl|gnash|gnats|gnaws|gnome|goads|goals|goats|godly|going|golds|golfs|goner|gongs|gonna|goods|goody|gooey|goofs|goofy|goons|goose|gored|gores|gorge|gouge|gourd|gowns|grabs|grace|grade|graft|grain|grams|grand|grant|grape|graph|grasp|grass|grate|grave|gravy|graze|great|greed|green|greet|grids|grief|grill|grime|grimy|grind|grins|gripe|grips|grits|groan|groin|groom|grope|gross|group|grove|growl|grown|grows|grubs|gruel|gruff|grunt|guard|guess|guest|guide|guild|guile|guilt|guise|gulch|gulfs|gulls|gully|gulps|gummy|guppy|gurus|gusts|gusty|guyed|habit|hacks|hails|hairs|hairy|haled|haler|hales|halls|halon|halos|halts|halve|hands|handy|hangs|happy|hardy|hared|harem|hares|harks|harms|harps|harry|harsh|harts|haste|hasty|hatch|hated|hates|hauls|haunt|haven|haves|havoc|hawks|hayed|hazed|hazel|hazes|heads|heady|heals|heaps|heard|hears|heart|heath|heats|heave|heavy|hedge|heeds|heels|hefty|heirs|hello|helms|helps|hence|herbs|herds|heron|hewed|hicks|hided|hides|highs|hiked|hiker|hikes|hills|hilly|hilts|hinds|hinge|hints|hippy|hired|hires|hitch|hived|hives|hoard|hobby|hobos|hocks|hoist|holds|holed|holes|holly|homed|homes|homey|honed|hones|honey|honks|hoods|hoofs|hooks|hoops|hoots|hoped|hopes|horde|horns|horny|horse|hosed|hoses|hosts|hotel|hotly|hound|hours|house|hovel|hover|howls|huffs|huffy|huger|hulks|hulls|human|humid|humps|hunch|hunks|hunts|hurls|hurry|hurts|husks|husky|hutch|hyena|hymns|icier|icing|icons|ideal|ideas|idiom|idiot|idled|idler|idles|idols|igloo|image|impel|imply|inane|incur|index|inept|inert|infer|infix|inked|inlay|inlet|inner|input|inter|iotas|irate|irked|irons|irony|isles|issue|itchy|items|ivies|ivory|jacks|jaded|jades|jails|jambs|jaunt|jawed|jeans|jeers|jells|jelly|jerks|jerky|jests|jetty|jewel|jibed|jibes|jiffy|jilts|joins|joint|joked|joker|jokes|jolly|jolts|joyed|judge|juice|juicy|jumbo|jumps|jumpy|junks|junta|juror|karat|kayak|keels|keens|keeps|keyed|khaki|kicks|kills|kilns|kilos|kilts|kinda|kinds|kings|kinks|kinky|kiosk|kited|kites|kitty|kiwis|knack|knead|kneed|kneel|knees|knelt|knife|knits|knobs|knock|knoll|knots|known|knows|koala|kudos|label|laced|laces|lacks|laded|laden|lades|ladle|lager|lairs|lakes|lambs|lamed|lamer|lames|lamps|lance|lands|lanes|lanky|lapel|lapse|lards|large|larks|larva|laser|lasts|latch|later|latex|lathe|laths|lauds|laugh|lawns|laxer|layer|leach|leads|leafs|leafy|leaks|leaky|leans|leaps|learn|lease|leash|least|leave|ledge|leech|leeks|leers|leery|lefts|legal|lemme|lemon|lends|leper|letup|levee|level|lever|liars|libel|licks|lifts|light|liked|liken|liker|likes|lilac|lilts|limbo|limbs|limed|limes|limit|limps|lined|linen|liner|lines|lingo|links|lions|lisps|lists|lithe|lived|liven|liver|lives|livid|llama|loads|loafs|loans|loath|lobby|lobes|local|locks|lodge|lofts|lofty|logic|loins|lolls|longs|looks|looms|loons|loony|loops|loose|loots|loped|lopes|lords|lorry|loser|loses|lotus|louse|lousy|loved|lover|loves|lowed|lower|lowly|loyal|lucid|lucks|lucky|lulls|lumps|lumpy|lunar|lunch|lunge|lungs|lurch|lured|lures|lurid|lurks|lusts|lusty|lutes|lying|lymph|lynch|lyres|lyric|maced|maces|macho|madam|madly|magic|maids|mails|maims|mains|maize|major|maker|makes|males|malls|malts|mamas|mamma|manes|mange|mango|mangy|mania|manic|manly|manor|maple|march|mares|maria|marks|marry|marsh|marts|masks|mason|masts|match|mated|mates|matte|mauls|mauve|maxim|maybe|mayor|mazes|meals|mealy|means|meant|meats|medal|media|meets|melon|melts|memos|mends|menus|mercy|meres|merge|merit|merry|messy|metal|meted|meter|metes|metro|mewed|midst|miens|might|miked|mikes|miles|milks|milky|mills|mimed|mimes|mimic|mince|minds|mined|miner|mines|minks|minor|mints|minus|mired|mires|mirth|miser|mists|misty|mites|mitts|mixed|mixer|mixes|moans|moats|mocks|modal|model|modes|moist|molar|moles|money|monks|month|moods|moody|mooed|moons|moors|moose|moots|moped|mopes|moral|morns|moron|mossy|motel|moths|motif|motor|motto|mound|mount|mourn|mouse|mousy|mouth|moved|mover|moves|movie|mowed|mower|mucks|mucus|muddy|muffs|muggy|mulch|mules|mulls|multi|mummy|mumps|munch|mural|murky|mused|muses|mushy|music|musts|musty|muted|muter|mutes|mutts|myths|nails|naive|naked|named|names|napes|nappy|nasal|nasty|natty|naval|navel|nears|necks|needs|needy|neigh|nerve|nests|never|newer|newly|newsy|newts|nicer|niche|nicks|niece|nifty|night|nines|ninny|ninth|nippy|noble|nobly|nodes|noise|noisy|nomad|nooks|noose|norms|north|nosed|noses|notch|noted|notes|nouns|novel|nuder|nudes|nudge|nulls|numbs|nurse|nutty|nylon|nymph|oared|oases|oasis|oaths|obese|obeys|oboes|occur|ocean|octal|odder|oddly|offed|offer|often|ogled|ogles|ogres|oiled|okras|olden|older|olive|omega|omens|omits|onion|onset|oozed|oozes|opals|opens|opera|opium|opted|optic|orals|orbit|order|organ|other|otter|ought|ounce|ousts|outdo|outed|outer|ovals|ovary|ovens|overs|overt|owing|owned|owner|oxide|ozone|paced|paces|packs|pacts|paddy|pagan|paged|pager|pages|pails|pains|paint|pairs|paled|paler|pales|palls|palms|panda|panel|panes|pangs|panic|pansy|pants|papal|papas|paper|parch|pared|pares|parka|parks|parse|parts|party|passe|pasta|paste|pasts|pasty|patch|pates|paths|patio|patty|pause|paved|paves|pawed|pawns|payed|payer|peace|peach|peaks|peals|pearl|pears|pecan|pecks|pedal|peeks|peels|peeps|peers|peeve|pelts|penal|pence|pends|penis|penny|peons|peony|perch|peril|perks|perky|pesky|pests|petal|peter|petty|phase|phone|photo|piano|picks|picky|piece|piers|piety|piked|pikes|piled|piles|pills|pilot|pinch|pined|pines|pinks|pints|pious|piped|pipes|pique|pitch|pithy|pivot|pixie|pizza|place|plaid|plain|plane|plank|plans|plant|plate|plays|plaza|plead|pleas|pleat|plied|plies|plods|plops|plots|ploys|pluck|plugs|plumb|plume|plump|plums|plush|poach|poems|poets|point|poise|poked|poker|pokes|pokey|polar|poled|poles|polio|polka|polls|polyp|ponds|pools|poops|poppy|porch|pored|pores|ports|posed|poses|posts|pouch|pound|pours|pouts|power|prank|prawn|prays|preen|press|preys|price|prick|pride|pried|pries|prime|primp|print|prior|prism|privy|prize|probe|prods|proms|prone|prong|proof|props|prose|proud|prove|prowl|prows|proxy|prude|prune|psalm|psych|pucks|pudgy|puffs|puffy|puked|pukes|pulls|pulps|pulse|pumas|pumps|punch|punks|punts|pupil|puppy|puree|purer|purge|purrs|purse|pushy|pussy|putts|putty|pyres|quack|quail|quake|qualm|quark|quart|quash|quays|queen|queer|quell|query|quest|queue|quick|quiet|quill|quilt|quips|quirk|quite|quits|quota|quote|rabbi|rabid|raced|racer|races|racks|radar|radii|radio|rafts|raged|rages|raids|rails|rains|rainy|raise|raked|rakes|rally|ramps|ranch|range|ranks|rants|raped|rapes|rapid|rared|rarer|rares|rasps|rated|rates|ratio|ratty|raved|ravel|raven|raves|rawer|rayon|razed|razes|razor|reach|react|reads|ready|realm|reals|reams|reaps|rears|rebel|rebut|recap|recur|redid|reeds|reefs|reeks|reels|refer|regal|reign|reins|relax|relay|relic|remit|rends|renew|rents|repay|repel|reply|reset|resin|rests|retch|retry|reuse|revel|revue|rhino|rhyme|riced|rices|rider|rides|ridge|rifer|rifle|rifts|right|rigid|riled|riles|rinds|rings|rinks|rinse|riots|ripen|riper|risen|riser|rises|risks|risky|rites|rival|river|rivet|roach|roads|roams|roars|roast|robed|robes|robin|robot|rocks|rocky|rodeo|rogue|roles|rolls|roman|romps|roofs|rooks|rooms|roomy|roost|roots|roped|ropes|roses|rotor|rouge|rough|round|rouse|route|routs|rowdy|rowed|royal|ruddy|ruder|ruffs|rugby|ruing|ruins|ruled|ruler|rules|rummy|rumps|runes|rungs|runny|runts|rural|ruses|rusts|rusty|sacks|sades|sadly|safer|safes|sagas|sager|sages|sails|saint|salad|sales|sally|salon|salts|salty|salve|sames|sands|sandy|saner|sangs|saris|sassy|satin|sauce|saucy|sauna|saute|saved|saver|saves|savvy|sawed|scabs|scald|scale|scalp|scaly|scans|scant|scare|scarf|scars|scary|scene|scent|scoff|scold|scoop|scoot|scope|score|scorn|scour|scout|scowl|scram|scrap|screw|scrub|scuff|scums|seals|seams|sears|seats|sects|sedan|seeds|seedy|seeks|seems|seeps|seize|sells|semen|sends|sense|serum|serve|seven|sever|sewed|sewer|sexed|sexes|shack|shade|shady|shaft|shake|shaky|shall|shame|shams|shape|share|shark|sharp|shave|shawl|sheaf|shear|sheds|sheen|sheep|sheer|sheet|shelf|shell|shied|shies|shift|shine|shins|shiny|ships|shire|shirk|shirt|shoal|shock|shoes|shone|shook|shoos|shoot|shops|shore|short|shots|shout|shove|shown|shows|showy|shred|shrew|shrub|shrug|shuck|shuns|shunt|shuts|shyer|sicks|sided|sides|sidle|siege|sieve|sifts|sighs|sight|sigma|signs|silks|sills|silly|silos|silts|since|sinew|singe|sings|sinks|sinus|sired|siren|sires|sissy|sited|sites|sixes|sixth|sixty|sized|sizer|sizes|skate|skein|skews|skids|skied|skies|skill|skimp|skims|skins|skips|skirt|skits|skulk|skull|skunk|slabs|slack|slain|slake|slams|slang|slant|slaps|slash|slate|slats|slave|slays|sleds|sleek|sleep|sleet|slept|slews|slice|slick|slide|slime|slims|slimy|sling|slink|slips|slits|slobs|slogs|slope|slops|slosh|sloth|slots|slows|slugs|slump|slums|slung|slunk|slurs|slush|sluts|slyly|smack|small|smart|smash|smear|smell|smelt|smile|smirk|smite|smith|smock|smoke|smoky|smote|smuts|snack|snags|snail|snake|snaps|snare|snarl|sneak|sneer|snide|sniff|snipe|snips|snobs|snoop|snore|snort|snots|snout|snows|snowy|snubs|snuff|snugs|soaks|soaps|soapy|soars|sober|socks|sodas|sofas|soggy|soils|solar|soled|soles|solid|solos|solve|songs|sonic|sooty|sorer|sores|sorry|sorta|sorts|souls|sound|soups|sours|south|sowed|space|spade|spank|spans|spare|spark|spars|spasm|spate|spats|spawn|spays|speak|spear|speck|speed|spell|spend|spent|sperm|spews|spice|spicy|spied|spies|spike|spill|spine|spins|spire|spite|spits|splat|split|spoil|spoke|spoof|spook|spool|spoon|spore|sport|spots|spout|spray|spree|sprig|spuds|spunk|spurn|spurs|spurt|squad|squat|squid|stabs|stack|staff|stage|stags|staid|stain|stair|stake|stale|stalk|stall|stamp|stand|stank|stare|stark|stars|start|state|stave|stays|steak|steal|steam|steel|steep|steer|stems|steps|stern|stews|stick|stiff|still|sting|stink|stint|stirs|stock|stoke|stole|stomp|stone|stony|stood|stool|stoop|stops|store|stork|storm|story|stout|stove|stows|strap|straw|stray|strew|strip|strum|strut|stubs|stuck|studs|study|stuff|stump|stung|stunk|stuns|stunt|style|suave|sucks|suede|sugar|suing|suite|suits|sulks|sulky|sunny|sunup|super|surer|surfs|surge|surly|swabs|swamp|swans|swaps|swarm|swats|sways|swear|sweat|sweep|sweet|swell|swept|swift|swigs|swill|swims|swine|swing|swipe|swirl|swish|swoon|swoop|sword|swore|sworn|swung|syrup|tabby|table|taboo|tacit|tacks|tacky|tacos|tails|taint|taken|taker|takes|tales|talks|tally|talon|tamed|tamer|tames|tango|tangs|tanks|taped|taper|tapes|tardy|tarry|tarts|tasks|taste|tasty|tatty|taunt|tawny|taxed|taxes|taxis|teach|teaks|teams|tears|tease|teats|teems|teens|teeth|tells|tempo|tempt|tends|tenet|tenor|tense|tenth|tents|tepee|tepid|terms|terse|tests|texts|thank|thaws|theft|their|theme|there|these|theta|thick|thief|thigh|thing|think|thins|third|thong|thorn|those|thous|three|threw|throb|throw|thuds|thugs|thumb|thump|thyme|tiara|ticks|tidal|tided|tides|tiers|tiffs|tiger|tight|tilde|tiled|tiles|tills|tilts|timed|timer|times|timid|tinge|tings|tinny|tints|tipsy|tired|tires|title|toads|toast|today|togas|toils|token|tolls|tombs|tomes|tonal|toned|tones|tongs|tonic|tonne|tools|tooth|toots|topaz|topic|torch|torso|total|toted|totem|totes|touch|tough|tours|touts|towed|towel|tower|towns|toxic|toxin|toyed|trace|track|tract|trade|trail|train|trait|tramp|traps|trash|trawl|trays|tread|treat|treed|trees|treks|trend|trial|tribe|trick|tried|tries|trill|trims|trios|tripe|trips|trite|troll|troop|trots|trout|truce|truck|trued|truer|trues|truly|trump|trunk|trust|truth|tubas|tubed|tubes|tucks|tufts|tulip|tummy|tunas|tuned|tuner|tunes|tunic|turfs|turns|tusks|tutor|twang|tweak|tweed|tweet|twice|twigs|twine|twins|twirl|twist|tying|typed|types|udder|ulcer|ultra|uncle|uncut|under|undid|undue|unfit|unify|union|unite|units|unity|unman|unsay|unset|untie|until|upend|upped|upper|upset|urban|urged|urges|urine|usage|users|usher|using|usual|usurp|uteri|utter|vague|valet|valid|value|valve|vanes|vases|vasts|vault|veers|veils|veins|vends|venom|vents|venue|verbs|verge|verse|verve|vests|vexed|vexes|vials|vicar|viced|vices|video|views|vigil|viler|villa|vines|vinyl|viola|viper|viral|virus|visas|vised|vises|visit|visor|vista|vital|vivid|vocal|vodka|vogue|voice|voids|volts|vomit|voted|voter|votes|vouch|vowed|vowel|vying|waded|wades|wafer|wafts|waged|wager|wages|wagon|waifs|wails|waist|waits|waive|waked|waken|wakes|walks|walls|waltz|wands|waned|wanes|wanna|wants|wards|warms|warns|warps|warts|wasps|waste|watch|water|watts|waved|waver|waves|waxed|waxes|weans|wears|weary|weave|wedge|weeds|weedy|weeks|weeps|weest|weigh|weird|welds|wells|welts|whack|whale|wharf|whats|wheat|wheel|whens|where|whets|which|whiff|while|whims|whine|whips|whirl|whisk|white|whole|whoop|whore|whose|wicks|widen|wider|widow|width|wield|wilds|wills|wilts|wince|winch|winds|windy|wined|wines|wings|winks|wiped|wiper|wipes|wired|wires|wiser|wises|wisps|wispy|witch|witty|wives|woken|wolfs|woman|wombs|women|woods|woody|wooed|woofs|words|wordy|works|world|worms|worry|worse|worst|worth|would|wound|woven|wowed|wraps|wrath|wreak|wreck|wrens|wrest|wring|wrist|write|writs|wrong|wrote|wrung|wryer|yacht|yanks|yards|yarns|yawns|yearn|years|yeast|yells|yelps|yeses|yield|yodel|yoked|yokel|yokes|yolks|young|yours|youth|yowls|zebra|zeros|zests|zincs|zoned|zones|zooms"
    ALL_LETTERS_CONCAT: String = "abcdefghijklmnopqrstuvwxyz"
    FIVE_LETTER_WORDS_LIST: String[] = this.FIVE_LETTER_WORDS_CONCAT.split("|")
    greenList: String[] = []
    yellowList: String[] = []
    greyList: String[] = []
    whiteList: String[] = this.ALL_LETTERS_CONCAT.split("")


    constructor(
        public predictions:Prediction[],
        public answer:String = "",
        public maxGuesses:number = 6,
        public hasWon:Boolean = false,
        public hasLost:Boolean = false,
        public remainingGuesses: number = maxGuesses,
    ) {
        this.generateRandomAnswer()
        console.log("answer is: " + this.answer)
    }

    generateRandomAnswer() {
        const randomNumber = Math.floor(Math.random() * this.FIVE_LETTER_WORDS_LIST.length)
        this.answer = this.FIVE_LETTER_WORDS_LIST[randomNumber]
    }

    updateAllList() {
        this.updateYellowList()
        this.updateGreenList()
        this.updateGreyList()
    }

    updateYellowList() {
        for (var prediction of this.predictions) {
            for (let i = 0; i < prediction.result.length; i++) {
                const guessLetter = prediction.guess.charAt(i)
                const resultLetter = prediction.result.charAt(i)
                if (resultLetter === "I") {
                    if (this.whiteList.includes(guessLetter)) {
                        this.whiteList = this.stringArrayRemove(this.whiteList, guessLetter)
                    }
                    if (!this.yellowList.includes(guessLetter)) {
                        this.yellowList.push(guessLetter)
                    }
                }
            }
        }
    }

    updateGreenList() {
        for (var prediction of this.predictions) {
            for (let i = 0; i < prediction.result.length; i++) {
                const guessLetter = prediction.guess.charAt(i)
                const resultLetter = prediction.result.charAt(i)
                if (resultLetter === "M") {
                    if (this.whiteList.includes(guessLetter)) {
                        this.whiteList = this.stringArrayRemove(this.whiteList, guessLetter)
                    }
                    if (this.yellowList.includes(guessLetter)) {
                        this.yellowList = this.stringArrayRemove(this.yellowList, guessLetter)
                    }
                    if (!this.greenList.includes(guessLetter)) {
                        this.greenList.push(guessLetter)
                    }
                }
            }
        }
    }

    updateGreyList() {
        for (var prediction of this.predictions) {
            for (let i = 0; i < prediction.result.length; i++) {
                const guessLetter = prediction.guess.charAt(i)
                const resultLetter = prediction.result.charAt(i)
                if (resultLetter === "N") {
                    if (this.whiteList.includes(guessLetter)) {
                        this.whiteList = this.stringArrayRemove(this.whiteList, guessLetter)
                    }
                    if (!this.greyList.includes(guessLetter)) {
                        this.greyList.push(guessLetter)
                    }
                }
            }
        }
    }

    stringArrayRemove(array: String[], value: String) {
        for (var i= 0; i < array.length; i++) {
            if (array[i] === value) {
                array.splice(i, 1)
                i--
            }
        }
        return array
    }

    checkGuess(guess: String) {
        let result = ""
        for (let i = 0; i < guess.length; i++) {
            const answerLetter = this.answer!.charAt(i)
            const guessLetter = guess.charAt(i)
            if (answerLetter === guessLetter) {
                result += "M"
            } else if (this.answer!.includes(guessLetter)) {
                result += "I"
            } else {
                result += "N"
            }
        }
        return result
    }

    checkIfWonOrLost() {
        this.checkIfWon()
        this.checkIfLost()
    }

    checkIfWon() {
        for (var prediction of this.predictions) {
            if (prediction.result === "MMMMM") {
                this.hasWon = true
            }
        }
    }

    checkIfLost() {
        if (this.predictions.length >= this.maxGuesses && !this.hasWon) {
            this.hasLost = true
        }
    }

    updateRemainingGuesses() {
      this.remainingGuesses = this.maxGuesses - this.predictions.length
    }
}