var searchIndex = new Map(JSON.parse('[\
["redstone",{"t":"CCCQQCCCCCCCIHHHFNNONNONNNNONONNNNNNHHFNNNNNNNNNNNONNNONKMMMMCCHCHHICCCCCCCCKKMMKRKHMHMPPPKPGPPPPPPPNNNNNNMNNNNNNMNNNNNNKMKKMMFNNNNCNNNNNNCNKMIRIKISTRRNNNNNHMHMCCCCCSSSSSSSSSSSFNNNNNNONNNNNNNOONHHNNNNFNNNNNNNNNNONNNNHHNNNONHFNNNNNNONNNNNHHNNNNCCCCKMKKRKMHMKMKM","n":["core","crypto","network","print_and_panic","print_debug","protocol","utils","aggregator","config","processor","processor_result","validator","Matrix","aggregate_matrix","aggregate_values","make_value_signer_matrix","Config","as_","assert_or_revert","block_timestamp","borrow","borrow_mut","feed_ids","feed_index","fmt","from","into","signer_count_threshold","signer_index","signers","try_from","try_into","type_id","validate_signer_count_threshold","validate_timestamp","vzip","make_processor_result","process_payload","ProcessorResult","as_","assert_or_revert","borrow","borrow_mut","eq","equivalent","equivalent","equivalent","fmt","from","into","min_timestamp","try_from","try_into","type_id","values","vzip","Validator","feed_index","signer_index","validate_signer_count_threshold","validate_timestamp","keccak256","recover","keccak256","crypto256","recover_address","recover_public_key","_Network","as_str","assert","error","flattened","from_bytes_repr","print_debug","radix","specific","AsAsciiStr","AsHexStr","as_ascii_str","as_hex_str","Assert","ErrorArg","Unwrap","assert_or_revert","assert_or_revert","assert_or_revert_bool_with","unwrap_or_revert","ArrayIsEmpty","ClonedContractError","ContractError","ContractErrorContent","CryptographicError","Error","InsufficientSignerCount","NonEmptyPayloadRemainder","NumberOverflow","SizeNotSupported","TimestampTooFuture","TimestampTooOld","WrongRedStoneMarker","as_","assert_or_revert","borrow","borrow_mut","clone","clone_into","code","code","contract_error","fmt","fmt","from","into","message","to_owned","to_string","try_from","try_into","type_id","vzip","Flattened","flattened","FromBytesRepr","Sanitized","from_bytes_repr","sanitized","Radix","as_","borrow","borrow_mut","from","from_bytes_repr","into","print","revert","try_from","try_into","type_id","u256_ext","vzip","U256Ext","max_value","Bytes","BytesRepr","Network","NetworkSpecific","U256","VALUE_SIZE","VALUE_SIZE","ValueRepr","_Self","as_ascii_str","as_hex_str","avg","from_bytes_repr","max_value","print","print","revert","revert","constants","data_package","data_point","marker","payload","DATA_FEED_ID_BS","DATA_PACKAGES_COUNT_BS","DATA_POINTS_COUNT_BS","DATA_POINT_VALUE_BYTE_SIZE_BS","MAX_TIMESTAMP_AHEAD_MS","MAX_TIMESTAMP_DELAY_MS","REDSTONE_MARKER","REDSTONE_MARKER_BS","SIGNATURE_BS","TIMESTAMP_BS","UNSIGNED_METADATA_BYTE_SIZE_BS","DataPackage","as_","assert_or_revert","borrow","borrow_mut","clone","clone_into","data_points","eq","equivalent","equivalent","equivalent","fmt","from","into","signer_address","timestamp","to_owned","trim_data_package","trim_data_packages","try_from","try_into","type_id","vzip","DataPoint","as_","assert_or_revert","borrow","borrow_mut","clone","clone_into","eq","equivalent","equivalent","equivalent","feed_id","fmt","from","into","to_owned","trim_data_point","trim_data_points","try_from","try_into","type_id","value","vzip","trim_redstone_marker","Payload","as_","assert_or_revert","borrow","borrow_mut","clone","clone_into","data_packages","fmt","from","into","make","to_owned","trim_metadata","trim_payload","try_from","try_into","type_id","vzip","filter","median","trim","trim_zeros","FilterSome","filter_some","Averageable","Avg","Item","Median","avg","maybe_pick_median","median","Trim","trim_end","TrimZeros","trim_zeros"],"q":[[0,"redstone"],[7,"redstone::core"],[12,"redstone::core::aggregator"],[16,"redstone::core::config"],[36,"redstone::core::processor"],[38,"redstone::core::processor_result"],[56,"redstone::core::validator"],[61,"redstone::crypto"],[63,"redstone::crypto::keccak256"],[64,"redstone::crypto::recover"],[66,"redstone::crypto::recover::crypto256"],[67,"redstone::network"],[76,"redstone::network::as_str"],[80,"redstone::network::assert"],[87,"redstone::network::error"],[120,"redstone::network::flattened"],[122,"redstone::network::from_bytes_repr"],[126,"redstone::network::radix"],[140,"redstone::network::radix::u256_ext"],[142,"redstone::network::specific"],[160,"redstone::protocol"],[165,"redstone::protocol::constants"],[176,"redstone::protocol::data_package"],[200,"redstone::protocol::data_point"],[223,"redstone::protocol::marker"],[224,"redstone::protocol::payload"],[243,"redstone::utils"],[247,"redstone::utils::filter"],[249,"redstone::utils::median"],[256,"redstone::utils::trim"],[258,"redstone::utils::trim_zeros"],[260,"core::option"],[261,"alloc::vec"],[262,"bnum::cast"],[263,"core::ops::function"],[264,"core::fmt"],[265,"core::result"],[266,"core::any"],[267,"alloc::boxed"],[268,"alloc::string"],[269,"core::cmp"]],"i":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,0,24,24,24,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,28,0,34,0,0,31,0,34,9,9,9,0,9,0,9,9,9,9,9,9,9,9,9,9,9,9,9,35,9,9,9,9,9,9,35,9,9,9,9,9,9,0,37,0,0,38,39,0,50,50,50,50,0,50,50,50,50,50,50,0,50,0,41,0,51,0,0,0,0,51,51,51,1,1,1,1,1,0,51,0,51,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,5,5,5,5,0,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,0,0,42,42,42,42,42,0,0,20,20,20,20,20,20,20,20,20,20,20,20,0,0,20,20,20,20,0,0,0,0,0,43,0,0,47,0,44,0,47,0,48,0,49],"f":"`````````````{{{f{{f{{d{b}}}}}}h}{{f{b}}}}{{h{f{j}}}{{f{b}}}}{{{l{h}}{f{j}}}{{f{{f{{d{b}}}}}}}}`{cg{}{}{{n{e}}}}{{cei}g{}{}{}{{Ad{{l{g}}}{{A`{Ab}}}}}}`{{{l{c}}}{{l{e}}}{}{}}{{{l{Afc}}}{{l{Afe}}}{}{}}`{{{l{h}}b}{{d{Ah}}}}{{{l{h}}{l{AfAj}}}Al}{cc{}}{ce{}{}}`{{{l{h}}{l{{B`{An}}}}}{{d{Ah}}}}`{c{{Bb{e}}}{}{}}0{{{l{c}}}Bd{}}{{{l{h}}Ah{l{{B`{{d{b}}}}}}}{{f{b}}}}{{{l{h}}AhBf}Bf}5{{hBh}Bj}{{hBl}Bj}`>=<;{{{l{Bj}}{l{Bj}}}Bn}{{{l{c}}{l{e}}}Bn{}{}}00{{{l{Bj}}{l{AfAj}}}Al};:`887`:`{{{l{C`}}b}{{d{Ah}}}}{{{l{C`}}{l{{B`{An}}}}}{{d{Ah}}}}{{{l{C`}}Ah{l{{B`{{d{b}}}}}}}{{f{b}}}}{{{l{C`}}AhBf}Bf}``{{{l{{B`{An}}}}}{{Cb{{B`{An}}}}}}`{{{f{An}}{f{An}}}{{f{An}}}}{{{Cb{{B`{An}}}}{l{{B`{An}}}}An}{{Cb{{B`{An}}}}}}```````````{{{l{Cd}}}Cf}{{{l{Ch}}}Cf}```{{ceg}cCj{{Cl{{l{c}}}{{A`{Bn}}}}}{{Ad{{l{c}}}{{A`{Ab}}}}}}{{Cnce}Cn{}{{Cl{{l{Cn}}}{{A`{Ab}}}}}}{{Bnc}D`{{Ad{}{{A`{Ab}}}}}}{{{Dd{}{{Db{c}}}}e}g{}{{Cl{{l{c}}}{{A`{Ab}}}}}{}}`````````````{cg{}{}{{n{e}}}}{{cei}g{}{}{}{{Ad{{l{g}}}{{A`{Ab}}}}}}{{{l{c}}}{{l{e}}}{}{}}{{{l{Afc}}}{{l{Afe}}}{}{}}{{{l{Ab}}}Ab}{{{l{c}}{l{Afe}}}D`{}{}}{{{l{Df}}}An}{{{l{Ab}}}Dh}{cAbDf}{{{l{Ab}}{l{AfAj}}}Al}0{cc{}}{ce{}{}}{{{l{Df}}}Cf}{{{l{c}}}e{}{}}{{{l{c}}}Cf{}}{c{{Bb{e}}}{}{}}0{{{l{c}}}Bd{}}5`{{{l{Dj}}}c{}}``{cDl{}}{DnDn}`{cg{}{}{{n{e}}}}{{{l{c}}}{{l{e}}}{}{}}{{{l{Afc}}}{{l{Afe}}}{}{}}<`;{CfD`}{AbE`}998`=`{{}Eb}`````````{{{l{b}}}Cf}0{{bb}b}{{{f{An}}}b}{{}b}6655`````````````````9{{cei}g{}{}{}{{Ad{{l{g}}}{{A`{Ab}}}}}}98{{{l{j}}}j}{{{l{c}}{l{Afe}}}D`{}{}}`{{{l{j}}{l{j}}}Bn}{{{l{c}}{l{e}}}Bn{}{}}00{{{l{j}}{l{AfAj}}}Al}{cc{}}{ce{}{}}``{{{l{c}}}e{}{}}{{{l{Af{f{An}}}}}j}{{{l{Af{f{An}}}}Ah}{{f{j}}}}{c{{Bb{e}}}{}{}}0{{{l{c}}}Bd{}}5`{cg{}{}{{n{e}}}}={{{l{c}}}{{l{e}}}{}{}}{{{l{Afc}}}{{l{Afe}}}{}{}}{{{l{Ed}}}Ed}>{{{l{Ed}}{l{Ed}}}Bn}===`{{{l{Ed}}{l{AfAj}}}Al}<;:{{{l{Af{f{An}}}}Ah}Ed}{{{l{Af{f{An}}}}AhAh}{{f{Ed}}}}998`={{{l{Af{f{An}}}}}D`}`8{{cei}g{}{}{}{{Ad{{l{g}}}{{A`{Ab}}}}}}87{{{l{Bh}}}Bh}{{{l{c}}{l{Afe}}}D`{}{}}`{{{l{Bh}}{l{AfAj}}}Al}{cc{}}{ce{}{}}{{{l{Af{f{An}}}}}Bh}{{{l{c}}}e{}{}}{{{l{Af{f{An}}}}}Ah}2{c{{Bb{e}}}{}{}}0{{{l{c}}}Bd{}}5`````{{{l{Ef}}}c{}}````{{EhEh}Eh}{{ccc}{{d{c}}}Ej}{{{En{}{{El{c}}}}}c{}}`{{{l{AfF`}}Ah}c{}}`{FbFb}","D":"Ed","p":[[8,"U256",142],[6,"Option",260],[5,"Vec",261],[5,"Config",16],[5,"DataPackage",176],[1,"reference"],[10,"CastFrom",262],[17,"Output"],[6,"Error",87],[10,"FnOnce",263],[0,"mut"],[1,"usize"],[5,"Formatter",264],[8,"Result",264],[1,"u8"],[1,"slice"],[6,"Result",265],[5,"TypeId",266],[1,"u64"],[5,"Payload",224],[5,"ProcessorResult",38],[8,"Bytes",142],[1,"bool"],[10,"Validator",56],[5,"Box",267],[10,"AsAsciiStr",76],[5,"String",268],[10,"AsHexStr",76],[10,"Debug",264],[10,"Fn",263],[10,"Assert",80],[1,"unit"],[17,"ErrorArg"],[10,"Unwrap",80],[10,"ContractErrorContent",87],[1,"u16"],[10,"Flattened",120],[10,"FromBytesRepr",122],[10,"Sanitized",122],[1,"never"],[10,"U256Ext",140],[5,"DataPoint",200],[10,"FilterSome",247],[10,"Avg",249],[10,"PartialOrd",269],[17,"Item"],[10,"Median",249],[10,"Trim",256],[10,"TrimZeros",258],[5,"Radix",126],[10,"NetworkSpecific",142]],"r":[],"b":[[109,"impl-Debug-for-Error"],[110,"impl-Display-for-Error"]],"c":"OjAAAAAAAAA=","e":"OzAAAAEAANoAEwABAA0AEAAAABIAAQAVAAEAGAABAB0AAAAfAAYAKAAIADQAAgA4AAAAPgAZAFsAAABlAAoAcgAQAIQAAACGADcAwAAVANgAEQDsABgA"}]\
]'));
if (typeof exports !== 'undefined') exports.searchIndex = searchIndex;
else if (window.initSearch) window.initSearch(searchIndex);
