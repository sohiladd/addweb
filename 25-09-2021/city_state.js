var countries = Object();

countries['Asia'] = '|Bangladesh|Bhutan|Brunei|Burma (Myanmar)|Cambodia|China|East Timor|India|Indonesia|Japan|Kazakhstan|Korea (north)|Korea (south)|Laos|Malaysia|Maldives|Mongolia|Nepal|Philippines|Russian Federation|Singapore|Sri Lanka|Taiwan|Thailand|Vietnam';

////////////////////////////////////////////////////////////////////////////

var city_states = Object();
li||Aileu|Ainaro|Baucau|Bobonaro (Maliana)|Cova-Lima (Suai)|Ermera|Lautem (Los Palos)|Liquica|Manatuto|Manufahi (Same)|Oecussi (Ambeno)|Viqueque';
city_states['India'] = '|New Delhi||Andaman/Nicobar Islands|Andhra Pradesh|Arunachal Pradesh|Assam|Bihar|Chandigarh|Chhattisgarh|Dadra/Nagar Haveli|Daman/Diu|Goa|Gujarat|Haryana|Himachal Pradesh|Jammu/Kashmir|Jharkhand|Karnataka|Kerala|Lakshadweep|Madhya Pradesh|Maharashtra|Manipur|Meghalaya|Mizoram|Nagaland|Orissa|Pondicherry|Punjab|Rajasthan|Sikkim|Tamil Nadu|Tripura|Uttaranchal|Uttar Pradesh|West Bengal';
city_states['Indonesia'] = '|Jakarta||Aceh|Bali|Banten|Bengkulu|Gorontalo|Jakarta Raya|Jambi|Jawa Barat|Jawa Tengah|Jawa Timur|Kalimantan Barat|Kalimantan Selatan|Kalimantan Tengah|Kalimantan Timur|Kepulauan Bangka Belitung|Lampung|Maluku|Maluku Utara|Nusa Tenggara Barat|Nusa Tenggara Timur|Papua|Riau|Sulawesi Selatan|Sulawesi Tengah|Sulawesi Tenggara|Sulawesi Utara|Sumatera Barat|Sumatera Selatan|Sumatera Utara|Yogyakarta';
city_states['Japan'] = '|Tokyo||Aichi|Akita|Aomori|Chiba|Ehime|Fukui|Fukuoka|Fukushima|Gifu|Gumma|Hiroshima|Hokkaido|Hyogo|Ibaraki|Ishikawa|Iwate|Kagawa|Kagoshima|Kanagawa|Kochi|Kumamoto|Kyoto|Mie|Miyagi|Miyazaki|Nagano|Nagasaki|Nara|Niigata|Oita|Okayama|Okinawa|Osaka|Saga|Saitama|Shiga|Shimane|Shizuoka|Tochigi|Tokushima|Tokyo|Tottori|Toyama|Wakayama|Yamagata|Yamaguchi|Yamanashi';
city_states['Kazakhstan'] = '|Astana||Almaty|Almaty|Aqmola|Aqtobe|Astana|Atyrau|Batys Qazaqstan|Bayqongyr|Mangghystau|Ongtustik Qazaqstan|Pavlodar|Qaraghandy|Qostanay|Qyzylorda|Shyghys Qazaqstan|Soltustik Qazaqstan|Zhambyl';
city_states['Korea (north)'] = '|P\\'yongyang||Chagang-do|Hamgyong-bukto|Hamgyong-namdo|Hwanghae-bukto|Hwanghae-namdo|Kaesong-si|Kangwon-do|Najin Sonbong-si|Namp\\'o-si|P\\'yongan-bukto|P\\'yongan-namdo|P\\'yongyang-si|Yanggang-do';


//Caribbean
city_states['Anguilla'] = '|The Valley';
city_states['Antigua/Barbuda'] = '|Saint John||Barbuda|Redonda|Saint George|Saint Mary|Saint Paul|Saint Peter|Saint Philip';
city_states['Aruba'] = '|Oranjestad';
city_states['Bahamas'] = '|Nassau||Acklins/Crooked Islands|Bimini|Cat Island|Exuma|Freeport|Fresh Creek|Governor\\'s Harbour|Green Turtle Cay|Harbour Island|High Rock|Inagua|Kemps Bay|Long Island|Marsh Harbour|Mayaguana|New Providence|Nichollstown/Berry Islands|Ragged Island|Rock Sound|Sandy Point|San Salvador/Rum Cay';
city_states['Barbados'] = '|Bridgetown||Christ Church|Saint Andrew|Saint George|Saint James|Saint John|Saint Joseph|Saint Lucy|Saint Michael|Saint Peter|Saint Philip|Saint Thomas';
city_states['Cuba'] = '|Havana||Camaguey|Ciego de Avila|Cienfuegos|Ciudad de La Habana|Granma|Guantanamo|Holguin|Isla de la Juventud|La Habana|Las Tunas|Matanzas|Pinar del Rio|Sancti Spiritus|Santiago de Cuba|Villa Clara';
city_states['Dominica'] = '|Roseau||Saint Andrew|Saint David|Saint George|Saint John|Saint Joseph|Saint Luke|Saint Mark|Saint Patrick|Saint Paul|Saint Peter';
city_states['Dominican Republic'] = '|Santo Domingo||Azua|Baoruco|Barahona|Dajabon|Distrito Nacional|Duarte|Elias Pina|El Seibo|Espaillat|Hato Mayor|Independencia|La Altagracia|La Romana|La Vega|Maria Trinidad Sanchez|Monsenor Nouel|Monte Cristi|Monte Plata|Pedernales|Peravia|Puerto Plata|Salcedo|Samana|Sanchez Ramirez|San Cristobal|San Juan|San Pedro de Macoris|Santiago|Santiago Rodriguez|Valverde';
city_states['Grenada'] = '|Saint George\\'s||Carriacou/Petit Martinique|Saint Andrew|Saint David|Saint John|Saint Mark|Saint Patrick';
city_states['Guadeloupe'] = '|Basse-Terre';
city_states['Haiti'] = '|Port-au-Prince||Artibonite|Centre|Grand \\'Anse|Nord|Nord-Est|Nord-Ouest|Ouest|Sud|Sud-Est';
city_states['Jamaica'] = '|Kingston||Clarendon|Hanover|Manchester|Portland|Saint Andrew|Saint Ann|Saint Catherine|Saint Elizabeth|Saint James|Saint Mary|Saint Thomas|Trelawny|Westmoreland';
city_states['Martinique'] = '|Fort-de-France';
city_states['Montserrat'] = '|Brades Estate|Plymouth||Saint Anthony|Saint Georges|Saint Peter';
city_states['Netherlands Antilles'] = '|Willemstad';
city_states['Puerto Rico'] = '|San Juan||Adjuntas|Aguada|Aguadilla|Aguas Buenas|Aibonito|Anasco|Arecibo|Arroyo|Barceloneta|Barranquitas|Bayamon|Cabo Rojo|Caguas|Camuy|Canovanas|Carolina|Catano|Cayey|Ceiba|Ciales|Cidra|Coamo|Comerio|Corozal|Culebra|Dorado|Fajardo|Florida|Guanica|Guayama|Guayanilla|Guaynabo|Gurabo|Hatillo|Hormigueros|Humacao|Isabela|Jayuya|Juana Diaz|Juncos|Lajas|Lares|Las Marias|Las Piedras|Loiza|Luquillo|Manati|Maricao|Maunabo|Mayaguez|Moca|Morovis|Naguabo|Naranjito|Orocovis|Patillas|Penuelas|Ponce|Quebradillas|Rincon|Rio Grande|Sabana Grande|Salinas|San German|San Lorenzo|San Sebastian|Santa Isabel|Toa Alta|Toa Baja|Trujillo Alto|Utuado|Vega Alta|Vega Baja|Vieques|Villalba|Yabucoa|Yauco';
city_states['St. Barts'] = '';
city_states['St. Kitts/Nevis'] = '|Basseterre||Christ Church Nichola Town|St. Anne Sandy Point|St. George Basseterre|St. George Gingerland|St. James Windward|St. John Capesterre|St. John Figtree|St. Mary Cayon|St. Paul Capesterre|St. Paul Charlestown|St. Peter Basseterre|St. Thomas Lowland|St. Thomas Middle Island|Trinity Palmetto Point';
city_states['St. Lucia'] = '|Castries||Anse-la-Raye|Castries|Choiseul|Dauphin|Dennery|Gros-Islet|Laborie|Micoud|Praslin|Soufriere|Vieux-Fort';
city_states['St. Martin/Sint Maarten'] = '';
city_states['St Vincent/Grenadines'] = '|Kingstown||Charlotte|Grenadines|Saint Andrew|Saint David|Saint George|Saint Patrick';
city_states['San Andres'] = '';
city_states['Trinidad/Tobago'] = '|Port-of-Spain||Arima|Caroni|Mayaro|Nariva|Saint Andrew|Saint David|Saint George|Saint Patrick|San Fernando|Tobago|Victoria';
city_states['Turks/Caicos'] = '|Grand Turk (Cockburn Town)';


//Central America
city_states['Belize'] = '|Belmopan||Belize|Cayo|Corozal|Orange Walk|Stann Creek|Toledo';
city_states['Costa Rica'] = '|San Jose||Alajuela|Cartago|Guanacaste|Heredia|Limon|Puntarenas';
city_states['El Salvador'] = '|San Salvador||Ahuachapan|Cabanas|Chalatenango|Cuscatlan|La Libertad|La Paz|La Union|Morazan|San Miguel|Santa Ana|San Vicente|Sonsonate|Usulutan';
city_states['Guatemala'] = '|Guatemala||Alta Verapaz|Baja Verapaz|Chimaltenango|Chiquimula|El Progreso|Escuintla|Guatemala|Huehuetenango|Izabal|Jalapa|Jutiapa|Peten|Quetzaltenango|Quiche|Retalhuleu|Sacatepequez|San Marcos|Santa Rosa|Solola|Suchitepequez|Totonicapan|Zacapa';
city_states['Honduras'] = '|Tegucigalpa||Atlantida|Choluteca|Colon|Comayagua|Copan|Cortes|El Paraiso|Francisco Morazan|Gracias a Dios|Intibuca|Islas de la Bahia|La Paz|Lempira|Ocotepeque|Olancho|Santa Barbara|Valle|Yoro';
city_states['Nicaragua'] = '|Managua||Boaco|Carazo|Chinandega|Chontales|Esteli|Granada|Jinotega|Leon|Madriz|Managua|Masaya|Matagalpa|Nueva Segovia|Rio San Juan|Rivas|Atlantico Norte|Atlantico Sur';
city_states['Panama'] = '|Panama||Bocas del Toro|Chiriqui|Cocle|Colon|Darien|Herrera|Los Santos|San Blas|Veraguas';


//Europe
city_states['Albania'] = '|Tirana||Berat|Bulqize|Delvine|Devoll|Diber|Durres|Elbasan|Fier|Gjirokaster|Gramsh|Has|Kavaje|Kolonje|Korce|Kruje|Kucove|Kukes|Kurbin|Lezhe|Librazhd|Lushnje|Malesi e Madhe|Mallakaster|Mat|Mirdite|Peqin|Permet|Pogradec|Puke|Sarande|Shkoder|Skrapar|Tepelene|Tirane|Tropoje|Vlore';
city_states['Andorra'] = '|Andorra la Vella||Canillo|Encamp|La Massana|Escaldes-Engordany|Ordino|Sant Julia de Loria';
city_states['Austria'] = '|Vienna||Burgenland|Kaernten|Niederoesterreich|Oberoesterreich|Salzburg|Steiermark|Tirol|Vorarlberg|Wien';
city_states['Belarus'] = '|Minsk||Brest|Homyel\\'|Horad Minsk||Hrodna|Mahilyow|Vitsyebsk';
city_states['Belgium'] = '|Brussels||Antwerpen|Brabant Wallon|Brussels (Bruxelles)|Hainaut|Liege|Limburg|Luxembourg|Namur|Oost-Vlaanderen|Vlaams-Brabant|West-Vlaanderen';
city_states['Bosnia/Herzegovina'] = '|Sarajevo';
city_states['Bulgaria'] = '|Sofiya||Blagoevgrad|Burgas|Dobrich|Gabrovo|Khaskovo|Kurdzhali|Kyustendil|Lovech|Montana|Pazardzhik|Pernik|Pleven|Plovdiv|Razgrad|Ruse|Shumen|Silistra|Sliven|Smolyan|Sofiya-Grad|Stara Zagora|Turgovishte|Varna|Veliko Turnovo|Vidin|Vratsa|Yambol';
city_states['Croatia'] = '|Zagreb||Bjelovarsko-Bilogorska|Brodsko-Posavska|Dubrovacko-Neretvanska|Istarska|Karlovacka|Koprivnicko-Krizevacka|Krapinsko-Zagorska|Licko-Senjska|Medimurska|Osjecko-Baranjska|Pozesko-Slavonska|Primorsko-Goranska|Sibensko-Kninska|Sisacko-Moslavacka|Splitsko-Dalmatinska|Varazdinska|Viroviticko-Podravska|Vukovarsko-Srijemska|Zadarska|Zagrebacka';
city_states['Czech Republic'] = '|Prague (Praha)||Jihocesky|Jihomoravsky|Karlovarsky|Kralovehradecky|Liberecky|Moravskoslezsky|Olomoucky|Pardubicky|Plzensky|Stredocesky|Ustecky|Vysocina|Zlinsky';
city_states['Denmark'] = '|Copenhagen (Kobenhavn)||Arhus|Bornholm|Fredericksberg|Frederiksborg|Fyn|Kobenhavns|Nordjylland|Ribe|Ringkobing|Roskilde|Sonderjylland|Storstrom|Vejle|Vestsjalland|Viborg';
city_states['Estonia'] = '|Harjumaa (Tallinn)||Hiiumaa (Kardla)|Ida-Virumaa (Johvi)|Jarvamaa (Paide)|Jogevamaa (Jogeva)|Laanemaa (Haapsalu)|Laane-Virumaa (Rakvere)|Parnumaa (Parnu)|Polvamaa (Polva)|Raplamaa (Rapla)|Saaremaa (Kuressaare)|Tartumaa (Tartu)|Valgamaa (Valga)|Viljandimaa (Viljandi)|Vorumaa (Voru)';
city_states['Finland'] = '|Helsinki||Aland|Etela-Suomen Laani|Ita-Suomen Laani|Lansi-Suomen Laani|Lappi|Oulun Laani';
city_states['France'] = '|Paris||Alsace|Aquitaine|Auvergne|Basse-Normandie|Bourgogne|Bretagne|Centre|Champagne-Ardenne|Corse|Franche-Comte|Haute-Normandie|Ile-de-France|Languedoc-Roussillon|Limousin|Lorraine|Midi-Pyrenees|Nord-Pas-de-Calais|Pays de la Loire|Picardie|Poitou-Charentes|Provence-Alpes-Cote d\\'Azur|Rhone-Alpes';
city_states['Georgia'] = '|T\\'bilisi||Bat\\'umi|Chiat\\'ura|Gori|Guria|Imereti|Kakheti|K\\'ut\\'aisi|Kvemo Kartli|Mtskheta-Mtianeti|P\\'ot\\'i|Racha-Lechkhumi/Kvemo Svaneti|Rust\\'avi|Samegrelo/Zemo Svaneti|Samtskhe-Javakheti|Shida Kartli|Sokhumi|Tqibuli|Tsqaltubo|Zugdidi';
city_states['Germany'] = '|Berlin||Baden-Wuerttemberg|Bayern|Berlin|Brandenburg|Bremen|Hamburg|Hessen|Mecklenburg-Vorpommern|Niedersachsen|Nordrhein-Westfalen|Rheinland-Pfalz|Saarland|Sachsen|Sachsen-Anhalt|Schleswig-Holstein|Thueringen';
city_states['Greece'] = '|Athens||Agion Oros (Mt. Athos)|Achaia|Aitolia kai Akarmania|Argolis|Arkadia|Arta|Attiki|Chalkidiki|Chanion|Chios|Dodekanisos|Drama|Evros|Evrytania|Evvoia|Florina|Fokidos|Fthiotis|Grevena|Ileia|Imathia|Ioannina|Irakleion|Karditsa|Kastoria|Kavala|Kefallinia|Kerkyra|Kilkis|Korinthia|Kozani|Kyklades|Lakonia|Larisa|Lasithi|Lefkas|Lesvos|Magnisia|Messinia|Pella|Pieria|Preveza|Rethynnis|Rodopi|Samos|Serrai|Thesprotia|Thessaloniki|Trikala|Voiotia|Xanthi|Zakynthos';
city_states['Hungary'] = '|Budapest||Bacs-Kiskun|Baranya|Bekes|Bekescsaba|Borsod-Abauj-Zemplen|Csongrad|Debrecen|Dunaujvaros|Eger|Fejer|Gyor|Gyor-Moson-Sopron|Hajdu-Bihar|Heves|Hodmezovasarhely|Jasz-Nagykun-Szolnok|Kaposvar|Kecskemet|Komarom-Esztergom|Miskolc|Nagykanizsa|Nograd|Nyiregyhaza|Pecs|Pest|Somogy|Sopron|Szabolcs-Szatmar-Bereg|Szeged|Szekesfehervar|Szolnok|Szombathely|Tatabanya|Tolna|Vas|Veszprem|Veszprem|Zala|Zalaegerszeg';
city_states['Iceland'] = '|Reykjavik||Akranes|Akureyri|Arnessysla|Austur-Bardhastrandarsysla|Austur-Hunavatnssysla|Austur-Skaftafellssysla|Borgarfjardharsysla|Dalasysla|Eyjafjardharsysla|Gullbringusysla|Hafnarfjordhur|Husavik|Isafjordhur|Keflavik|Kjosarsysla|Kopavogur|Myrasysla|Neskaupstadhur|Nordhur-Isafjardharsysla|Nordhur-Mulasys-la|Nordhur-Thingeyjarsysla|Olafsfjordhur|Rangarvallasysla|Saudharkrokur|Seydhisfjordhur|Siglufjordhur|Skagafjardharsysla|Snaefellsnes-og Hnappadalssysla|Strandasysla|Sudhur-Mulasysla|Sudhur-Thingeyjarsysla|Vesttmannaeyjar|Vestur-Bardhastrandarsysla|Vestur-Hunavatnssysla|Vestur-Isafjardharsysla|Vestur-Skaftafellssysla';
city_states['Ireland'] = '|Dublin||Carlow|Cavan|Clare|Cork|Donegal|Galway|Kerry|Kildare|Kilkenny|Laois|Leitrim|Limerick|Longford|Louth|Mayo|Meath|Monaghan|Offaly|Roscommon|Sligo|Tipperary|Waterford|Westmeath|Wexford|Wicklow';
city_states['Italy'] = '|Rome||Abruzzi|Basilicata|Calabria|Campania|Emilia-Romagna|Friuli-Venezia Giulia|Lazio|Liguria|Lombardia|Marche|Molise|Piemonte|Puglia|Sardegna|Sicilia|Toscana|Trentino-Alto Adige|Umbria|Valle d\\'Aosta|Veneto';
city_states['Latvia'] = '|Riga||Aizkraukles|Aluksnes|Balvu|Bauskas|Cesu|Daugavpils|Daugavpils|Dobeles|Gulbenes|Jekabpils|Jelgava|Jelgavas|Jurmala|Kraslavas|Kuldigas|Liepaja|Liepajas|Limbazu|Ludzas|Madonas|Ogres|Preilu|Rezekne|Rezeknes|Riga|Rigas|Saldus|Talsu|Tukuma|Valkas|Valmieras|Ventspils|Ventspils';
city_states['Liechtenstein'] = '|Vaduz||Balzers|Eschen|Gamprin|Mauren|Planken|Ruggell|Schaan|Schellenberg|Triesen|Triesenberg';
city_states['Lithuania'] = '|Vilnius||Alytaus|Kauno|Klaipedos|Marijampoles|Panevezio|Siauliu|Taurages|Telsiu|Utenos';
city_states['Luxembourg'] = '|Luxembourg||Diekirch|Grevenmacher';
city_states['Macedonia'] = '|Skopje||Aracinovo|Bac|Belcista|Berovo|Bistrica|Bitola|Blatec|Bogdanci|Bogomila|Bogovinje|Bosilovo|Brvenica|Cair|Capari|Caska|Cegrane|Centar|Centar Zupa|Cesinovo|Cucer-Sandevo|Debar|Delcevo|Delogozdi|Demir Hisar|Demir Kapija|Dobrusevo|Dolna Banjica|Dolneni|Dorce Petrov|Drugovo|Dzepciste|Gazi Baba|Gevgelija|Gostivar|Gradsko|Ilinden|Izvor|Jegunovce|Kamenjane|Karbinci|Karpos|Kavadarci|Kicevo|Kisela Voda|Klecevce|Kocani|Konce|Kondovo|Konopiste|Kosel|Kratovo|Kriva Palanka|Krivogastani|Krusevo|Kuklis|Kukurecani|Kumanovo|Labunista|Lipkovo|Lozovo|Lukovo|Makedonska Kamenica|Makedonski Brod|Mavrovi Anovi|Meseista|Miravci|Mogila|Murtino|Negotino|Negotino-Polosko|Novaci|Novo Selo|Oblesevo|Ohrid|Orasac|Orizari|Oslomej|Pehcevo|Petrovec|Plasnica|Podares|Prilep|Probistip|Radovis|Rankovce|Resen|Rosoman|Rostusa|Samokov|Saraj|Sipkovica|Sopiste|Sopotnica|Srbinovo|Star Dojran|Staravina|Staro Nagoricane|Stip|Struga|Strumica|Studenicani|Suto Orizari|Sveti Nikole|Tearce|Tetovo|Topolcani|Valandovo|Vasilevo|Velesta|Veles|Vevcani|Vinica|Vitoliste|Vranestica|Vrapciste|Vratnica|Vrutok|Zajas|Zelenikovo|Zeleno|Zitose|Zletovo|Zrnovci';
city_states['Malta'] = '|Valletta';
city_states['Moldova'] = '|Chisinau||Balti|Cahul|Chisinau|Chisinau|Edinet|Gagauzia|Lapusna|Orhei|Soroca|Stinga Nistrului|Tighina|Ungheni';
city_states['Monaco'] = '|Monaco||Fontvieille|La Condamine|Monaco-Ville|Monte-Carlo';
city_states['Netherlands'] = '|Amsterdam|The Hague||Drenthe|Flevoland|Friesland|Gelderland|Groningen|Limburg|Noord-Brabant|Noord-Holland|Overijssel|Utrecht|Zeeland|Zuid-Holland';
city_states['Norway'] = '|Oslo||Akershus|Aust-Agder|Buskerud|Finnmark|Hedmark|Hordaland|More og Romsdal|Nordland|Nord-Trondelag|Oppland|Ostfold|Rogaland|Sogn og Fjordane|Sor-Trondelag|Telemark|Troms|Vest-Agder|Vestfold';
city_states['Poland'] = '|Warsaw||Dolnoslaskie|Kujawsko-Pomorskie|Lodzkie|Lubelskie|Lubuskie|Malopolskie|Mazowieckie|Opolskie|Podkarpackie|Podlaskie|Pomorskie|Slaskie|Swietokrzyskie|Warminsko-Mazurskie|Wielkopolskie|Zachodniopomorskie';
city_states['Portugal'] = '|Lisbon||Aveiro|Acores (Azores)|Beja|Braga|Braganca|Castelo Branco|Coimbra|Evora|Faro|Guarda|Leiria|Lisboa|Madeira|Portalegre|Porto|Santarem|Setubal|Viana do Castelo|Vila Real|Viseu';
city_states['Romania'] = '|Bucharest (Bucuresti)||Alba|Arad|Arges|Bacau|Bihor|Bistrita-Nasaud|Botosani|Braila|Brasov|Buzau|Calarasi|Caras-Severin|Cluj|Constanta|Covasna|Dimbovita|Dolj|Galati|Gorj|Giurgiu|Harghita|Hunedoara|Ialomita|Iasi|Ilfov|Maramures|Mehedinti|Mures|Neamt|Olt|Prahova|Salaj|Satu Mare|Sibiu|Suceava|Teleorman|Timis|Tulcea|Vaslui|Vilcea|Vrancea';
city_states['San Marino'] = '|San Marino||Acquaviva|Borgo Maggiore|Chiesanuova|Domagnano|Faetano|Fiorentino|Monte Giardino|Serravalle';
city_states['Serbia/Montenegro (Yugoslavia)'] = '|Belgrade||Kosovo|Montenegro|Serbia|Vojvodina';
city_states['Slovakia'] = '|Bratislava||Banskobystricky|Kosicky|Nitriansky|Presovsky|Trenciansky|Trnavsky|Zilinsky';
city_states['Slovenia'] = '|Ljubljana||Ajdovscina|Beltinci|Bled|Bohinj|Borovnica|Bovec|Brda|Brezice|Brezovica|Cankova-Tisina|Celje|Cerklje na Gorenjskem|Cerknica|Cerkno|Crensovci|Crna na Koroskem|Crnomelj|Destrnik-Trnovska Vas|Divaca|Dobrepolje|Dobrova-Horjul-Polhov Gradec|Dol pri Ljubljani|Domzale|Dornava|Dravograd|Duplek|Gorenja Vas-Poljane|Gorisnica|Gornja Radgona|Gornji Grad|Gornji Petrovci|Grosuplje|Hodos Salovci|Hrastnik|Hrpelje-Kozina|Idrija|Ig|Ilirska Bistrica|Ivancna Gorica|Izola|Jesenice|Jursinci|Kamnik|Kanal|Kidricevo|Kobarid|Kobilje|Kocevje|Komen|Koper|Kozje|Kranj|Kranjska Gora|Krsko|Kungota|Kuzma|Lasko|Lenart|Lendava|Litija|Ljubno|Ljutomer|Logatec|Loska Dolina|Loski Potok|Luce|Lukovica|Majsperk|Maribor|Medvode|Menges|Metlika|Mezica|Miren-Kostanjevica|Mislinja|Moravce|Moravske Toplice|Mozirje|Murska Sobota|Muta|Naklo|Nazarje|Nova Gorica|Novo Mesto|Odranci|Ormoz|Osilnica|Pesnica|Piran|Pivka|Podcetrtek|Podvelka-Ribnica|Postojna|Preddvor|Ptuj|Puconci|Race-Fram|Radece|Radenci|Radlje ob Dravi|Radovljica|Ravne-Prevalje|Ribnica|Rogasevci|Rogaska Slatina|Rogatec|Ruse|Semic|Sencur|Sentilj|Sentjernej|Sentjur pri Celju|Sevnica|Sezana|Skocjan|Skofja Loka|Skofljica|Slovenj Gradec|Slovenska Bistrica|Slovenske Konjice|Smarje pri Jelsah|Smartno ob Paki|Sostanj|Starse|Store|Sveti Jurij|Tolmin|Trbovlje|Trebnje|Trzic|Turnisce|Velenje|Velike Lasce|Videm|Vipava|Vitanje|Vodice|Vojnik|Vrhnika|Vuzenica|Zagorje ob Savi|Zalec|Zavrc|Zelezniki|Ziri|Zrece';
city_states['Spain'] = '|Madrid||Andalucia|Aragon|Asturias|Baleares (Balearic Islands)|Ceuta|Canarias (Canary Islands)|Cantabria|Castilla-La Mancha|Castilla y Leon|Cataluna|Communidad Valencian|Extremadura|Galicia|La Rioja|Melilla|Murcia|Navarra|Pais Vasco (Basque Country)';
city_states['Sweden'] = '|Stockholm||Blekinge|Dalarnas|Gavleborgs|Gotlands|Hallands|Jamtlands|Jonkopings|Kalmar|Kronobergs|Norrbottens|Orebro|Ostergotlands|Skane|Sodermanlands|Uppsala|Varmlands|Vasterbottens|Vasternorrlands|Vastmanlands|Vastra Gotalands';
city_states['Switzerland'] = '|Bern||Aargau|Appenzell Ausser-Rhoden|Appenzell Inner-Rhoden|Basel-Landschaft|Basel-Stadt|Fribourg|Geneve|Glarus|Graubunden|Jura|Luzern|Neuchatel|Nidwalden|Obwalden|Sankt Gallen|Schaffhausen|Schwyz|Solothurn|Thurgau|Ticino|Uri|Valais|Vaud|Zug|Zurich';
city_states['Ukraine'] = '|Kiev (Kyyiv)||Cherkas\\'ka (Cherkasy)|Chernihivs\\'ka (Chernihiv)|Chernivets\\'ka (Chernivtsi)|Dnipropetrovs\\'ka (Dnipropetrovs\\'k)|Donets\\'ka (Donets\\'k)|Ivano-Frankivs\\'ka (Ivano-Frankivs\\'k)|Izmail (Izmayl)|Kharkivs\\'ka (Kharkiv)|Khersons\\'ka (Kherson)|Khmel\\'nyts\\'ka (Khmel\\'nyts\\'kyy)|Kirovohrads\\'ka (Kirovohrad)|Luhans\\'ka (Luhans\\'k)|L\\'vivs\\'ka (L\\'viv)|Mykolayivs\\'ka (Mykolayiv)|Odes\\'ka (Odesa)|Poltavs\\'ka (Poltava)|Avtonomna Respublika Krym|Rivnens\\'ka (Rivne)|Sevastopol\\'|Sums\\'ka (Sumy)|Ternopil\\'s\\'ka (Ternopil\\')|Vinnyts\\'ka (Vinnytsya)|Volyns\\'ka (Luts\\'k)|Zakarpats\\'ka (Uzhhorod)|Zaporiz\\'ka (Zaporizhzhya)|Zhytomyrs\\'ka (Zhytomyr)';
city_states['United Kingdom'] = '|-----ENGLAND:-----|Barking/Dagenham|Barnet|Barnsley|Bath/North East Somerset|Bedfordshire|Bexley|Birmingham|Blackburn with Darwen|Blackpool|Bolton|Bournemouth|Bracknell Forest|Bradford|Brent|Brighton/Hove|City of Bristol|Bromley|Buckinghamshire|Bury|Calderdale|Cambridgeshire|Camden|Cheshire|Cornwall|Coventry|Croydon|Cumbria|Darlington|Derby|Derbyshire|Devon|Doncaster|Dorset|Dudley|Durham|Ealing|East Riding of Yorkshire|East Sussex|Enfield|Essex|Gateshead|Gloucestershire|Greenwich|Hackney|Halton|Hammersmith/Fulham|Hampshire|Haringey|Harrow|Hartlepool|Havering|Herefordshire|Hertfordshire|Hillingdon|Hounslow|Isle of Wight|Islington|Kensington/Chelsea|Kent|City of Kingston upon Hull|Kingston upon Thames|Kirklees|Knowsley|Lambeth|Lancashire|Leeds|Leicester|Leicestershire|Lewisham|Lincolnshire|Liverpool|City of London|Luton|Manchester|Medway|Merton|Middlesbrough|Milton Keynes|Newcastle upon Tyne|Newham|Norfolk|Northamptonshire|North East Lincolnshire|North Lincolnshire|North Somerset|North Tyneside|Northumberl/|North Yorkshire|Nottingham|Nottinghamshire|Oldham|Oxfordshire|Peterborough|Plymouth|Poole|Portsmouth|Reading|Redbridge|Redcar/Clevel/|Richmond upon Thames|Rochdale|Rotherham|Rutl/|Salford|Shropshire|S/well|Sefton|Sheffield|Slough|Solihull|Somerset|Southampton|Southend-on-Sea|South Gloucestershire|South Tyneside|Southwark|Staffordshire|St. Helens|Stockport|Stockton-on-Tees|Stoke-on-Trent|Suffolk|Sunderl/|Surrey|Sutton|Swindon|Tameside|Telford/Wrekin|Thurrock|Torbay|Tower Hamlets|Trafford|Wakefield|Walsall|Waltham Forest|W/sworth|Warrington|Warwickshire|West Berkshire|Westminster|West Sussex|Wigan|Wiltshire|Windsor/Maidenhead|Wirral|Wokingham|Wolverhampton|Worcestershire|York||-----NORTHERN IRELAND:-----|Antrim|County Antrim|Ards|Armagh|County Armagh|Ballymena|Ballymoney|Banbridge|Belfast|Carrickfergus|Castlereagh|Coleraine|Cookstown|Craigavon|Down|County Down|Dungannon|Fermanagh|County Fermanagh|Larne|Limavady|Lisburn|County Londonderry|Derry|Magherafelt|Moyle|Newry/Mourne|Newtownabbey|North Down|Omagh|Strabane|County Tyrone||-----SCOTLAND:-----|Aberdeen City|Aberdeenshire|Angus|Argyll/Bute|The Scottish Borders|Clackmannanshire|Dumfries/Galloway|Dundee City|East Ayrshire|East Dunbartonshire|East Lothian|East Renfrewshire|City of Edinburgh|Falkirk|Fife|Glasgow City|Highland|Inverclyde|Midlothian|Moray|North Ayrshire|North Lanarkshire|Orkney Islands|Perth/Kinross|Renfrewshire|Shetland Islands|South Ayrshire|South Lanarkshire|Stirling|West Dunbartonshire|Eilean Siar (Western Isles)|West Lothian||-----WALES-----:|Isle of Anglesey|Blaenau Gwent|Bridgend|Caerphilly|Cardiff|Ceredigion|Carmarthenshire|Conwy|Denbighshire|Flintshire|Gwynedd|Merthyr Tydfil|Monmouthshire|Neath Port Talbot|Newport|Pembrokeshire|Powys|Rhondda Cynon Taff|Swansea|Torfaen|The Vale of Glamorgan|Wrexham';
city_states['Vatican City'] = '';


//Islands
city_states['Arctic Ocean'] = '|Franz Josef Land|Svalbard';
city_states['Atlantic Ocean (North)'] = '|Alderney|Azores|Baixo|Belle-Ile|Bermuda|Bioko|Block|Boa Vista|Borduy|Bugio|Canary Islands|Cape Breton|Cape Verde Islands|Channel Islands|Corvo|Deer Isle|Eysturoy|Faeroe Islands|Fago|Faial|Flores|Fuerteventura|Fugloy|Gomera|Graciosa|Gran Canaria|Grand Manan|Grande|Greenland|Guernsey|Hebrides|Herm|Hestur|Hierro|Iceland|Iles De La Madeleine|Ile de Noirmoutier|Ile de\\' Re|Ile d\\' Ol‚ron|Ile d\\' Yeu|Ilhas Desertas|Ireland|Isle au Haut|Isle of Lewis|Isle of Mull|Isle of Skye|Jersey|Kalsoy|Koltur|Kunoy|Lanzarote|La Palma|Litla Dimun|Long Island|Jan Mayen|Madeira Islands|Maio|Martha\\'s Vineyard|Matinicus|Monhegan|Mount Desert|Mykines|Nantucket Island|Newfoundland|Nolsoy|Orkney Islands|Pico|Porto Santo|Prince Edward Island|St. Peter/St. Paul Rocks|St.-Pierre/Miquelon|Praia|Sable Island|Sal|Sandoy|Santo Antao|Santa Maria|Sao Jorge|Sao Miguel|Sao Nicolau|Sao Tiago|Sao Tome/Principe|Sao Vicente|Sark|Scilly Isles|Shetland Islands|Skuvoy|Stora Dimun|Streymoy|Sumba|Svinoy|Swans|Tenerife|Terceira|Uist Islands|Vagar|Viday|Vinalhaven';
city_states['Atlantic Ocean (South)'] = '|Amsterdam|Andaman Islands|Annobon|Ascension|Bouvet|Falkland Islands|Gough|Martin Vas Islands|Nightingale|St. Helena|Shag/Black Rocks|South Georgia|South Orkney Islands|South Sandwich Islands|Traversay|Trindade|Tristan da Cunha';
city_states['Assorted'] = '|Akimiski|Aland|Alcatraz|Apostle Islands|Baffin|Banka|Banks|Beaver|Belcher Islands|Belitung|Borneo|Bornholm|Brac|Coats|Cres|Devon|East Frisian Islands|Ellesmere|Fyn|Galveston|Gotland|Groote Eylandt|Hiiumaa|Hong Kong Island|Ile d\\' Anticosti|Ile d\\' Orleans|Isla de Ometepe|Isla Del Ray|Isle of Man|Isle of Wight|Isle Royale|Jutland|Key Largo|Key West|King William|Krek|Langeland|Lantau|Lolland|Lundy|Mackinac|Madeleine Islands|Manhattan Island|Manitoulin|Marsh|Matagorda|Melville|North Hero|Oland|Paracel Islands|Pelee|Prince Charles|Prince of Wales|Queen Elizabeth Islands|Saaremaa|Sjaelland|Somerset|Southhampton|South Hero|Spratley Islands|Sulawesi|Victoria|Washington|Wellesley Islands';
city_states['Caribbean Sea'] = '|Abaco (great)|Abaco (little)|Acklins|Andros|Anegada|Anguilla|Antigua|Aruba|Bahamas|Barbados|Barbuda|Bimini Islands|Bonaire|Caicos Islands|Cat|Cayman Brac|Cayman Islands|Cozumel|Crooked|Cuba|Curacao|Dominica|Exuma|Grand Bahama|Grand Cayman|Grand Turk|Greater Antilles|Great Inagua|Grenada|Guadeloupe|Hispaniola (Haiti/DOR)|Isla de Margarita|Isla Mujeres|Isla La Tortuga|Isle of Youth|Jamaica|Lesser Antilles|Little Cayman|Little Inagua|Long|Marie-Galante|Martinique|Mayaguana|Montserrat|Navassa|Nevis|New Providence|Providencia|Puerto Rico|Roatan|Rum Cay|St. Barts|St. Croix|St. Eustatius|St. John|St. Kitts|St. Lucia|St. Martin/Sint Maartan|St. Thomas|St Vincent and the Grenadines|Saba|San Blas Islands|San Salvador|San Andres|Santa Catilina (St. Catherine)|Tobago|Tortola|Trinidad|Virgin Gorda|West Indies';
city_states['Greek Isles'] = '|Aegina|Alonissos|Amorgos|Andros|Angistri|Astipalea|Carpathos|Cephalonia|Chios (Hios)|Corfu|Cos (Kos)|Crete (Kriti)|Cyclades Islands|Dodecanese Islands|Dokos|Eubaea (Evia)|Evia|Hydra|Ikaria|Ionian Islands|Ios|Ithaca|Kea|Kefalonia|Kefalos|Kalimnos|Kassos|Kithnos|Kos|Kythnos|Kythria|Lefkada|Lemnos|Leros|Lesvos|Leucas|Limnos|Lipsi|Los|Melos|Mykonos|Naxos|Nisyros|Paros|Patmos|Poros|Pothia|Rhodes (Rodos)|Salamina|Samos|Samothrace|Santorini|Serifos|Seriphos|Sifnos|Sikinos|Skiros|Skiathos|Skopelos|Skyros|Spetses|Sporades Islands|Syros|Tenos (Tinos)|Thassos|Tzia|Zakinthos|Zante';
city_states['Indian Ocean'] = '|Addu Atoll|Agalega Islands|Amsterdam|Andaman Islands|Anjouan (Nzwani)|Ari Atoll|Ashmore/Cartier Islands|Bali|Barrow|Bathurst|Bompoka|Cape Barren|Car Nicobar|Chagos Archipelago|Christmas|Comoros|Crozet Islands|Danger|Diego Garcia|Eagle Islands|Egmont Islands|Faadhippolhu Atoll|Felidhoo Atoll|Flinders|Goidhoo Atoll|Grand Comore (Njazidja)|Great Nicobar|Hadhdhunmathee|Heard|Huvadhoo Atoll|Ihavandhippolhu Atoll|Java|Kangaroo|Katchall|Keeling Islands (Cocos)|King|Kolhumadulu Atoll|Lakshadweep Islands|Little Andaman|Little Nicobar|Lower Andaman|Maalhosmadulu Atoll|Maamakunudhoo Atoll|Madagascar|Mahe|Maldives|Male\\' Atoll|Mauritius|Mayotte|McDonald Islands|Melville|Middle Andaman|Miladhunmafulu Atoll|Moheli (Mwali)|Molaku Atoll|Nancowry|Nelsons Island|Nias|Nicobar Islands|Nilandhoo Atoll|North Andaman|Peros Banhos|Phuket|Prince Edward Islands|Reunion|Rodrigues|St. Paul|Salomon Islands|Seychelles|Shag|Siberut|Simeulue|Sipura|Socotra|Sumatra|Sri Lanka|Tarasa Dwip|Tasmania|Thiladhunmathee Atoll|Three Brothers|Timor|Tromelin|Zanzibar';
city_states['Mediterranean Sea'] = '|Aeolian Islands|Alboran|Balearic Islands|Cabrera|Capraia|Capri|Corse (Corsica)|Cyprus|Elba|Formentera|Gozo|Ibiza (Ivisa)|Iles d\\' Hyeres|Jalitah|Lampedusa|Lipari Islands|Mallorca (Majorca)|Malta|Maltese Islands|Menorca (Minorca)|Pantelleria|Ponziane|Salina|Sant\\' Antioca|San Pietro|Sardinia (Sardegna)|Sicily (Sicilia)|Stromboli|Vulcano|Zembra';
city_states['Oceania'] = '|Abaiang|Admiralty Islands|Aitutaki|Alofi|Ambrym|American Samoa|Antipodes|Atafu Atoll|Atiu|Auckland Islands|Aunu\\'u|Austral Islands|Banaba|Bega|Bora Bora|Bougainville|Bounty Islands|Campbell|Chatham Islands|Choiseul|Cook Islands|Coral Sea Islands|Efate|Elao|Erromango|Espiritu Santo|\\' Eua|Faioa|Fakaofo Atoll|Fatu Hiva|Fiji|French Polynesia|Funafuti Atoll|Futuna|Gambier Islands|Gau|Gilbert Islands|Gizo|Grand Terre|Great Barrier Reef|Guadacanal|Ha\\'apai Island Group|Hatutu|Hiva Oa|Horne Islands|Huahine|Isle of Pines|Kadavu|Karkar|Kioa|Kiribati|Kiritamati|Koro|Lakeba|Lau Group|Lifou|Line Islands|Loyalty Islands|Malaita|Malekula|Malolo|Mangaia|Manihiki|Manu\\'a Group|Manuae|Mare|Marquises Islands|Mata Utu|Matuku|Mauke|Maupiti|Melanesia|Mitiaro|Moala|Mohotani|Moorea|Nairai|Nanumea Atoll|Nassau|Nauru|Naviti|Nepean|New Britain|New Caledonia|New Georgia Islands|New Guinea|New Ireland|Niuafo\\'ou|Niuas Islands|Niuatoputapu|Niue|Niulakita Atoll|Nomuka Island Group|Norfolk Islands|Nukuaeta|Nukufetau Atoll|Nuku Hiva|Nukulaelae Atoll|Nukunono Atoll|Ofu|Olasega|Ono|Ouvea|Ovalau|Palmerston|Pangai|Penrhyn|Philip|Phoenix Islands|Pitcairn|Pitt Island|Polynesia|Pukapuka|Rabi|Raiatea|Rakahanga|Rangiroa|Rarotonga|Rotuma|Samao|San Cristobal|Santa Cruz Islands|Santa Isabel|Savai \\'i|Society Islands|Solomon Islands|Stewart|Suwarrow|Tabuaeran|Tahaa|Tahiti|Tahuata|Taiohae|Tanna|Tarawa|Tasmania|Tau|Taveuni|Tetiaroa|Tokelau|Tonga|Tongatapu|Totoya|Tuamotu Islands|Tubuai|Tupai|Tutuila|Tuvalu|Ua Huka|Ua Pou|Hiva Oa|Upolu|\\' Uta Vava\\'u|Uvea|Vaiaku|Vanua Balavu|Vanua Levu|Vanuatu|Vatulele|Vava\\'u Island Group|Vita Levu|Wallis Islands|Wallis and Futuna|Waya|Yasawa|Yasawa Group';
city_states['Pacific Ocean (North)'] = '|Aleutian Islands|Alexander Islands|Andreanof Islands|Babelthuap|Baker|Bikini|Bohol|Bonin Islands|Cabras|Caroline Islands|Cebu|Channel Islands (US)|Cheju Do|Chuuk|Diomede Islands|Guam|Hainan|Hawaii (big island)|Hawaiian Islands|Hokkaido|Honshu|Howland|Jaluit Atoll|Japan|Johnston Atoll|Kahoolawe|Kauai|Kodiak|Kosrae|Kwajalein Atoll|Kyushu|Lanai|Lifou|Loyalty Islands|Luzon|Maloelap Atoll|Majuro Atoll|Mare|Marshall Islands|Maui|Micronesia|Midway Islands|Mili Atoll|Mindanao|Mindoro|Molakai|Niihau|Near Islands|Negros|Northern Marianas|Nunivak|Oahu|Okinawa|Ostrov Sakhalin|Pagan|Palau|Palawan|Palmyra Atoll|Panay|Philippines|Pohnpei|Queen Charlotte Islands|Rat|Rongelap Atoll|St. Lawrence|St. Matthew|St. Paul|Saipan|Samar|San Clemente|San Miguel|San Nicolas|Santa Catalina|Santa Cruz|Santa Rosa|Shikoku|Taiwan|Tinian|Vancouver|Volcano Islands|Wake Island|Yap';
city_states['Pacific Ocean (South)'] = '|Easter|Galapogos Islands|Juan Fernandez Islands|Isla Espanola|Isla Fernandina|Isla Genovesa|Isla Isabella|Isla Marchena|Isla Pinta|Isla Puna|Isla San Cristobal|Isla San Salvador|Isla Santa Cruz|Isla Santa Maria|Robinson Crusoe|San Felix|Santa Clara';


//Middle East
city_states['Afghanistan'] = '|Kabul||Badakhshan|Badghis|Baghlan|Balkh|Bamian|Farah|Faryab|Ghazni|Ghowr|Helmand|Herat|Jowzjan|Kabol|Kandahar|Kapisa|Khowst|Konar|Kondoz|Laghman|Lowgar|Nangarhar|Nimruz|Nurestan|Oruzgan|Paktia|Paktika|Parvan|Samangan|Sar-e Pol|Takhar|Vardak|Zabol';
city_states['Armenia'] = '|Yerevan||Aragatsotn|Ararat|Armavir|Geghark\\'unik\\'|Kotayk\\'|Lorri|Shirak|Syunik\\'|Tavush|Vayots\\' Dzor';
city_states['Azerbaijan'] = '|Baku (Baki)||Abseron|Agcabadi|Agdam|Agdas|Agstafa|Agsu|Ali Bayramli|Astara|Balakan|Barda|Beylaqan|Bilasuvar|Cabrayil|Calilabad|Daskasan|Davaci|Fuzuli|Gadabay|Ganca|Goranboy|Goycay|Haciqabul|Imisli|Ismayilli|Kalbacar|Kurdamir|Lacin|Lankaran|Lankaran|Lerik|Masalli|Mingacevir|Naftalan|Naxcivan|Neftcala|Oguz|Qabala|Qax|Qazax|Qobustan|Quba|Qubadli|Qusar|Saatli|Sabirabad|Saki|Saki|Salyan|Samaxi|Samkir|Samux|Siyazan|Sumqayit|Susa|Susa|Tartar|Tovuz|Ucar|Xacmaz|Xankandi|Xanlar|Xizi|Xocali|Xocavand|Yardimli|Yevlax|Yevlax|Zangilan|Zaqatala|Zardab';
city_states['Bahrain'] = '|Manama||Al Hadd|Al Manamah|Al Mintaqah al Gharbiyah|Al Mintaqah al Wusta|Al Mintaqah ash Shamaliyah|Al Muharraq|Ar Rifa\\' wa al Mintaqah al Janubiyah|Jidd Hafs|Madinat Hamad|Madinat \\'Isa|Juzur Hawar|Sitrah';
city_states['Cyprus'] = '|Nicosia||Famagusta|Kyrenia|Larnaca|Limassol|Paphos';
city_states['Iran'] = '|Tehran||Ardabil|Azarbayjan-e Gharbi|Azarbayjan-e Sharqi|Bushehr|Chahar Mahall va Bakhtiari|Esfahan|Fars|Gilan|Golestan|Hamadan|Hormozgan|Ilam|Kerman|Kermanshah|Khorasan|Khuzestan|Kohkiluyeh va Buyer Ahmad|Kordestan|Lorestan|Markazi|Mazandaran|Qazvin|Qom|Semnan|Sistan va Baluchestan|Yazd|Zanjan';
city_states['Iraq'] = '|Baghdad||Al Anbar|Al Basrah|Al Muthanna|Al Qadisiyah|An Najaf|Arbil|As Sulaymaniyah|At Ta\\'mim|Babil|Dahuk|Dhi Qar|Diyala|Karbala\\'|Maysan|Ninawa|Salah ad Din|Wasit';
city_states['Israel'] = '|Jerusalem||Central|Haifa|Northern|Southern|Tel Aviv';
city_states['Jordan'] = '|Amman||Ajlun|Al \\'Aqabah|Al Balqa\\'|Al Karak|Al Mafraq|At Tafilah|Az Zarqa\\'|Irbid|Jarash|Ma\\'an|Madaba';
city_states['Kuwait'] = '|Kuwait||Al Ahmadi|Al Farwaniyah|Al \\'Asimah|Al Jahra\\'|Hawalli';
city_states['Kyrgyzstan'] = '|Bishkek Shaary||Batken Oblasty|Chuy Oblasty (Bishkek)|Jalal-Abad Oblasty|Naryn Oblasty|Osh Oblasty|Talas Oblasty|Ysyk-Kol Oblasty (Karakol)';
city_states['Lebanon'] = '|Beirut||Beyrouth|Beqaa|Liban-Nord|Liban-Sud|Mont-Liban|Nabatiye';
city_states['Oman'] = '|Muscat||Ad Dakhiliyah|Al Batinah|Al Wusta|Ash Sharqiyah|Az Zahirah|Musandam|Zufar';
city_states['Pakistan'] = '|Islamabad||Balochistan|Federally Administered Tribal Areas|North-West Frontier Province|Punjab|Sindh';
city_states['Qatar'] = '|Doha||Ad Dawhah|Al Ghuwayriyah|Al Jumayliyah|Al Khawr|Al Wakrah|Ar Rayyan|Jarayan al Batinah|Madinat ash Shamal|Umm Salal';
city_states['Saudi Arabia'] = '|Riyadh||Al Bahah|Al Hudud ash Shamaliyah|Al Jawf|Al Madinah|Al Qasim|Ar Riyad|Ash Sharqiyah (Eastern Province)|\\'Asir|Ha\\'il|Jizan|Makkah|Najran|Tabuk';
city_states['Syria'] = '|Damascus||Al Hasakah|Al Ladhiqiyah|Al Qunaytirah|Ar Raqqah|As Suwayda\\'|Dar\\'a|Dayr az Zawr|Dimashq|Halab|Hamah|Hims|Idlib|Rif Dimashq|Tartus';
city_states['Tajikistan'] = '|Dushanbe||Viloyati Mukhtori Kuhistoni Badakhshon|Viloyati Khatlon|Viloyati Sughd';
city_states['Turkey'] = '|Ankara||Adana|Adiyaman|Afyon|Agri|Aksaray|Amasya|Antalya|Ardahan|Artvin|Aydin|Balikesir|Bartin|Batman|Bayburt|Bilecik|Bingol|Bitlis|Bolu|Burdur|Bursa|Canakkale|Cankiri|Corum|Denizli|Diyarbakir|Duzce|Edirne|Elazig|Erzincan|Erzurum|Eskisehir|Gaziantep|Giresun|Gumushane|Hakkari|Hatay|Icel|Igdir|Isparta|Istanbul|Izmir|Kahramanmaras|Karabuk|Karaman|Kars|Kastamonu|Kayseri|Kilis|Kirikkale|Kirklareli|Kirsehir|Kocaeli|Konya|Kutahya|Malatya|Manisa|Mardin|Mugla|Mus|Nevsehir|Nigde|Ordu|Osmaniye|Rize|Sakarya|Samsun|Sanliurfa|Siirt|Sinop|Sirnak|Sivas|Tekirdag|Tokat|Trabzon|Tunceli|Usak|Van|Yalova|Yozgat|Zonguldak  Buri|Sisaket|Songkhla|Sukhothai|Suphan Buri|Surat Thani|Surin|Tak|Trang|Trat|Ubon Ratchathani|Udon Thani|Uthai Thani|Uttaradit|Yala|Yasothon';
city_states['Turkmenistan'] = '|Ashgabat||Ahal Welayaty|Balkan Welayaty|Dasoguz Welayaty|Labap Welayaty|Mary Welayaty';
city_states['United Arab Emirates'] = '|Abu Dhabi||Abu Zaby (Abu Dhabi)|\\'Ajman|Al Fujayrah|Ash Shariqah (Sharjah)|Dubayy (Dubai)|Ra\\'s al Khaymah|Umm al Qaywayn';
city_states['Uzbekistan'] = '|Tashkent (Toshkent)||Andijon Viloyati|Buxoro Viloyati|Farg\\'ona Viloyati|Jizzax Viloyati|Namangan Viloyati|Navoiy Viloyati|Qashqadaryo Viloyati (Qarshi)|Qaraqalpog\\'iston Respublikasi|Samarqand Viloyati|Sirdaryo Viloyati (Guliston)|Surxondaryo Viloyati (Termiz)|Toshkent Shahri|Toshkent Viloyati|Xorazm Viloyati (Urganch)';
city_states['Yemen'] = '|Sanaa||Abyan|\\'Adan|Al Bayda\\'|Al Hudaydah|Al Jawf|Al Mahrah|Al Mahwit|Dhamar|Hadramawt|Hajjah|Ibb|Lahij|Ma\\'rib|Sa\\'dah|San\\'a\\'|Shabwah|Ta\\'izz';


//North America
city_states['Bermuda'] = '|Hamilton||Devonshire|Hamilton|Hamilton|Paget|Pembroke|Saint George|Saint George\\'s|Sandys|Smith\\'s|Southampton|Warwick';
city_states['Canada'] = '|Ottawa||Alberta|British Columbia|Manitoba|New Brunswick|Newfoundland and Labrador|Northwest Territories|Nova Scotia|Nunavut|Ontario|Prince Edward Island|Quebec|Saskatchewan|Yukon Territory';
city_states['Caribbean'] = '';
city_states['Greenland'] = '|Nuuk (Godthab)||Avannaa (Nordgronland)|Tunu (Ostgronland)|Kitaa (Vestgronland)';
city_states['Mexico'] = '|Mexico (Distrito Federal)||Aguascalientes|Baja California|Baja California Sur|Campeche|Chiapas|Chihuahua|Coahuila de Zaragoza|Colima|Durango|Guanajuato|Guerrero|Hidalgo|Jalisco|Michoacan de Ocampo|Morelos|Nayarit|Nuevo Leon|Oaxaca|Puebla|Queretaro de Arteaga|Quintana Roo|San Luis Potosi|Sinaloa|Sonora|Tabasco|Tamaulipas|Tlaxcala|Veracruz-Llave|Yucatan|Zacatecas';
city_states['United States'] = '|Washington DC||Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Georgia|Kentucky|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusets|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming';


//South America
city_states['Argentina'] = '|Buenos Aires||Catamarca|Chaco|Chubut|Cordoba|Corrientes|Entre Rios|Formosa|Jujuy|La Pampa|La Rioja|Mendoza|Misiones|Neuquen|Rio Negro|Salta|San Juan|San Luis|Santa Cruz|Santa Fe|Santiago del Estero|Tucuman';
city_states['Bolivia'] = '|La Paz|Sucre||Chuquisaca|Cochabamba|Beni|Oruro|Pando|Potosi|Santa Cruz|Tarija';
city_states['Brazil'] = '|Brasilia||Acre|Alagoas|Amapa|Amazonas|Bahia|Ceara|Distrito Federal|Espirito Santo|Goias|Maranhao|Mato Grosso|Mato Grosso do Sul|Minas Gerais|Para|Paraiba|Parana|Pernambuco|Piaui|Rio de Janeiro|Rio Grande do Norte|Rio Grande do Sul|Rondonia|Roraima|Santa Catarina|Sao Paulo|Sergipe|Tocantins';
city_states['Chile'] = '|Santiago||Antofagasta|Araucania|Atacama|Bio-Bio|Coquimbo|Los Lagos|Maule|Tarapaca|Valparaiso';
city_states['Colombia'] = '|Bogota||Amazonas|Antioquia|Arauca|Atlantico|Bolivar|Boyaca|Caldas|Caqueta|Casanare|Cauca|Cesar|Choco|Cordoba|Cundinamarca|Guainia|Guaviare|Huila|La Guajira|Magdalena|Meta|Narino|Norte de Santander|Putumayo|Quindio|Risaralda|San Andres/Providencia|Santander|Sucre|Tolima|Valle del Cauca|Vaupes|Vichada';
city_states['Ecuador'] = '|Quito||Azuay|Bolivar|Canar|Carchi|Chimborazo|Cotopaxi|El Oro|Esmeraldas|Galapagos|Guayas|Imbabura|Loja|Los Rios|Manabi|Morona-Santiago|Napo|Orellana|Pastaza|Pichincha|Sucumbios|Tungurahua|Zamora-Chinchipe';
city_states['Guyana'] = '|Georgetown||Barima-Waini|Cuyuni-Mazaruni|Demerara-Mahaica|East Berbice-Corentyne|Essequibo Islands-West Demerara|Mahaica-Berbice|Pomeroon-Supenaam|Potaro-Siparuni|Upper Demerara-Berbice|Upper Takutu-Upper Essequibo';
city_states['Paraguay'] = '|Asuncion||Alto Paraguay|Alto Parana|Amambay|Boqueron|Caaguazu|Caazapa|Canindeyu|Central|Concepcion|Cordillera|Guaira|Itapua|Misiones|Neembucu|Paraguari|Presidente Hayes|San Pedro';
city_states['Peru'] = '|Lima||Amazonas|Ancash|Apurimac|Arequipa|Ayacucho|Cajamarca|Callao|Cusco|Huancavelica|Huanuco|Ica|Junin|La Libertad|Lambayeque|Loreto|Madre de Dios|Moquegua|Pasco|Piura|Puno|San Martin|Tacna|Tumbes|Ucayali';
city_states['Suriname'] = '|Paramaribo||Brokopondo|Commewijne|Coronie|Marowijne|Nickerie|Para|Saramacca|Sipaliwini|Wanica';
city_states['Uruguay'] = '|Montevideo||Artigas|Canelones|Cerro Largo|Colonia|Durazno|Flores|Florida|Lavalleja|Maldonado|Paysandu|Rio Negro|Rivera|Rocha|Salto|San Jose|Soriano|Tacuarembo|Treinta y Tres';
city_states['Venezuela'] = '|Caracas||Amazonas|Anzoategui|Apure|Aragua|Barinas|Bolivar|Carabobo|Cojedes|Delta Amacuro|Dependencias Federales|Distrito Federal|Falcon|Guarico|Lara|Merida|Miranda|Monagas|Nueva Esparta|Portuguesa|Sucre|Tachira|Trujillo|Vargas|Yaracuy|Zulia';

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

function setRegions()
{
	for (region in countries)
		document.write('<option value="' + region + '">' + region + '</option>');
}

function set_country(oRegionSel, oCountrySel, oCity_StateSel)
{
	var countryArr;
	oCountrySel.length = 0;
	oCity_StateSel.length = 0;
	var region = oRegionSel.options[oRegionSel.selectedIndex].text;
	if (countries[region])
	{
		oCountrySel.disabled = false;
		oCity_StateSel.disabled = true;
		oCountrySel.options[0] = new Option('SELECT COUNTRY','');
		countryArr = countries[region].split('|');
		for (var i = 0; i < countryArr.length; i++)
			oCountrySel.options[i + 1] = new Option(countryArr[i], countryArr[i]);
		document.getElementById('txtregion').innerHTML = region;
		document.getElementById('txtplacename').innerHTML = '';
	}
	else oCountrySel.disabled = true;
}

function set_city_state(oCountrySel, oCity_StateSel)
{
	var city_stateArr;
	oCity_StateSel.length = 0;
	var country = oCountrySel.options[oCountrySel.selectedIndex].text;
	if (city_states[country])
	{
		oCity_StateSel.disabled = false;
		oCity_StateSel.options[0] = new Option('SELECT NEAREST DIVISION','');
		city_stateArr = city_states[country].split('|');
		for (var i = 0; i < city_stateArr.length; i++)
			oCity_StateSel.options[i+1] = new Option(city_stateArr[i],city_stateArr[i]);
		document.getElementById('txtplacename').innerHTML = country;
	}
	else oCity_StateSel.disabled = true;
}

function print_city_state(oCountrySel, oCity_StateSel)
{
	var country = oCountrySel.options[oCountrySel.selectedIndex].text;
	var city_state = oCity_StateSel.options[oCity_StateSel.selectedIndex].text;
	if (city_state && city_states[country].indexOf(city_state) != -1)
		document.getElementById('txtplacename').innerHTML = city_state + ', ' + country;
	else document.getElementById('txtplacename').innerHTML = country;
}