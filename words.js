const words = [
  {
    word: "Supercalifragilisticexpialidocious",
    definition: "A playful word meaning fantastic or extraordinarily good."
  },
  {
    word: "Dichlorodiphenyltrichloroethane",
    definition: "A synthetic insecticide, commonly known as DDT."
  },
  {
    word: "Sphenopalatineganglioneuralgia",
    definition: "A sharp headache caused by something cold; brain freeze."
  },
  {
    word: "Pseudopseudohypoparathyroidism",
    definition: "A mild genetic condition that mimics a hormone disorder."
  },
  {
    word: "Hexakosioihexekontahexaphobia",
    definition: "Fear of the number 666."
  },
  {
    word: "Floccinaucinihilipilification",
    definition: "The act of calling something unimportant or worthless."
  },
  {
    word: "Ethylenediaminetetraacetates",
    definition: "Chemical salts used to bind metals in medicine and industry."
  },
  {
    word: "Antidisestablishmentarianism",
    definition: "Opposition to separating church and state."
  },
  {
    word: "Ethylenediaminetetraacetate",
    definition: "A chemical used to trap metal ions, often called EDTA."
  },
  {
    word: "Electroencephalographically",
    definition: "In a way that relates to measuring brain's electrical activity."
  },
  {
    word: "Radioimmunoelectrophoresis",
    definition: "A lab technique combining radioactivity and electric fields."
  },
  {
    word: "Phosphatidylethanolamines",
    definition: "Fat molecules found in cell membranes."
  },
  {
    word: "Immunoelectrophoretically",
    definition: "Using electricity to separate immune proteins in lab tests."
  },
  {
    word: "Phosphatidylethanolamine",
    definition: "A type of fat that helps build cell membranes."
  },
  {
    word: "Overintellectualizations",
    definition: "Excessive analysis that ignores emotion or practicality."
  },
  {
    word: "Microspectrophotometries",
    definition: "Techniques for measuring light absorption in tiny samples."
  },
  {
    word: "Microelectrophoretically",
    definition: "Using small electric fields to separate particles in labs."
  },
  {
    word: "Intercomprehensibilities",
    definition: "The ability of people to understand each other’s language."
  },
  {
    word: "Electroencephalographies",
    definition: "Tests that record the brain’s electrical activity."
  },
  {
    word: "Electroencephalographers",
    definition: "People who operate machines that record brain waves."
  },
  {
    word: "Electrocardiographically",
    definition: "In a way related to recording heart activity."
  },
  {
    word: "Dichlorodifluoromethanes",
    definition: "Chemicals once used in refrigerators and sprays."
  },
  {
    word: "Counter-Counter-Measures",
    definition: "Tactics used to block someone else's countermeasures."
  },
  {
    word: "Reinstitutionalizations",
    definition: "The process of returning people to institutional care."
  },
  {
    word: "Overintellectualization",
    definition: "The act of overthinking or analyzing everything too much."
  },
  {
    word: "One-Hundred-Percentisms",
    definition: "Beliefs or attitudes demanding total commitment."
  },
  {
    word: "Nonrepresentationalisms",
    definition: "Art styles that avoid realistic images or subjects."
  },
  {
    word: "Microspectrophotometric",
    definition: "Related to measuring light absorption in tiny samples."
  },
  {
    word: "Microspectrophotometers",
    definition: "Devices that measure how small samples absorb light."
  },
  {
    word: "Knock-Down-And-Drag-Out",
    definition: "A very intense or violent argument or fight."
  },
  {
    word: "Intersubstitutabilities",
    definition: "The ability of things to replace each other in function."
  },
  {
    word: "Indistinguishablenesses",
    definition: "The quality of being impossible to tell apart."
  },
  {
    word: "Hexamethylenetetramines",
    definition: "Chemicals used in fuel tablets and medical treatments."
  },
  {
    word: "Electroencephalographic",
    definition: "Related to recording the brain's electrical signals."
  },
  {
    word: "Electroencephalographer",
    definition: "A specialist who records brain activity using electrodes."
  },
  {
    word: "Dichlorodifluoromethane",
    definition: "A gas formerly used as a refrigerant, also called Freon-12."
  },
  {
    word: "Deinstitutionalizations",
    definition: "Processes of releasing people from institutional care."
  },
  {
    word: "Counter-Countermeasures",
    definition: "Tactics to defeat someone else's defensive actions."
  },
  {
    word: "Counter-Counter-Measure",
    definition: "A single tactic to defeat another’s countermeasure."
  },
  {
    word: "Carboxymethylcelluloses",
    definition: "Modified cellulose used to thicken foods or products."
  },
  {
    word: "Unself-Consciousnesses",
    definition: "States of being unaware of oneself in social situations."
  },
  {
    word: "Unrepresentativenesses",
    definition: "The quality of not being typical or representative."
  },
  {
    word: "Three-Dimensionalities",
    definition: "Qualities of having three dimensions or depth."
  },
  {
    word: "Spectrophotometrically",
    definition: "In a way related to measuring light absorption."
  },
  {
    word: "Reinstitutionalization",
    definition: "The act of placing someone back into institutional care."
  },
  {
    word: "Phosphoglyceraldehydes",
    definition: "Chemical compounds involved in metabolism."
  },
  {
    word: "Philoprogenitivenesses",
    definition: "Tendencies to love and care for one’s own children."
  },
  {
    word: "Overcommercializations",
    definition: "Processes of making something excessively commercial."
  },
  {
    word: "Otorhinolaryngologists",
    definition: "Doctors specializing in ear, nose, and throat disorders."
  },
  {
    word: "Otorhinolaryngological",
    definition: "Related to the medical study of ear, nose, and throat."
  },
  {
    word: "One-Hundred-Percentism",
    definition: "The belief in giving or expecting complete commitment."
  },
  {
    word: "Nonrepresentationalism",
    definition: "An art style that does not depict real objects or people."
  },
  {
    word: "Microspectrophotometry",
    definition: "Measuring how tiny samples absorb light."
  },
  {
    word: "Microspectrophotometer",
    definition: "A device that measures light absorption in small samples."
  },
  {
    word: "Keratoconjunctivitises",
    definition: "Inflammations of the cornea and conjunctiva in the eyes."
  },
  {
    word: "Keratoconjunctivitides",
    definition: "Multiple cases of eye inflammation affecting the cornea and conjunctiva."
  },
  {
    word: "Intercomprehensibility",
    definition: "How well two languages or dialects can be understood by each other."
  },
  {
    word: "Indistinguishabilities",
    definition: "The state of being impossible to tell apart."
  },
  {
    word: "Incomprehensiblenesses",
    definition: "The quality of being extremely difficult to understand."
  },
  {
    word: "Immunohistochemistries",
    definition: "Lab methods for detecting proteins in tissues using antibodies."
  },
  {
    word: "Hexamethylenetetramine",
    definition: "A chemical used in medicines and solid fuel tablets."
  },
  {
    word: "Establishmentarianisms",
    definition: "Beliefs supporting traditional institutions or authority."
  },
  {
    word: "Encephalomyocarditises",
    definition: "Inflammation of both the brain and heart muscle."
  },
  {
    word: "Electrophysiologically",
    definition: "In a way related to electrical activity in living tissues."
  },
  {
    word: "Electroencephalography",
    definition: "Recording of brain electrical activity using electrodes."
  },
  {
    word: "Electroencephalographs",
    definition: "Machines that record electrical activity of the brain."
  },
  {
    word: "Disestablishmentarians",
    definition: "People who support separating church from state."
  },
  {
    word: "Deinstitutionalization",
    definition: "The process of releasing people from long-term institutions."
  },
  {
    word: "Counterrevolutionaries",
    definition: "People who oppose or fight against a revolution."
  },
  {
    word: "Counterinterpretations",
    definition: "Alternative explanations or understandings of something."
  },
  {
    word: "Countercountermeasures",
    definition: "Tactics designed to defeat an opponent's countermeasures."
  },
  {
    word: "Counter-Counter-Measure",
    definition: "A single tactic to counter an opponent’s defensive move."
  },
  {
    word: "Constitutionalizations",
    definition: "Processes of adopting or forming a constitution."
  },
  {
    word: "Carboxymethylcellulose",
    definition: "A thickener and stabilizer used in foods and medicines."
  },
  {
    word: "Unexceptionablenesses",
    definition: "The state of being usual or not remarkable."
  },
  {
    word: "Undemonstrativenesses",
    definition: "Qualities of being reserved or not openly expressive."
  },
  {
    word: "Unconstitutionalities",
    definition: "Conditions of being against or violating a constitution."
  },
  {
    word: "Tetrahydrocannabinols",
    definition: "Chemical compounds found in cannabis with psychoactive effects."
  },
  {
    word: "Straightforwardnesses",
    definition: "Qualities of being simple, clear, and honest."
  },
  {
    word: "Stereomicroscopically",
    definition: "In a way related to using a stereomicroscope for viewing small objects."
  },
  {
    word: "Psychotherapeutically",
    definition: "In a way related to treating mental disorders through therapy."
  },
  {
    word: "Psychophysiologically",
    definition: "Concerning the relationship between psychological and physical processes."
  },
  {
    word: "Psychopharmacologists",
    definition: "Scientists who study how drugs affect the mind and behavior."
  },
  {
    word: "Psychopharmacological",
    definition: "Related to the effects of drugs on the mind."
  },
  {
    word: "Pseudosophistications",
    definition: "False displays of knowledge or complexity."
  },
  {
    word: "Pseudocholinesterases",
    definition: "Enzymes similar to cholinesterase that break down certain chemicals."
  },
  {
    word: "Photophosphorylations",
    definition: "Processes by which light energy is used to produce ATP in cells."
  },
  {
    word: "Photolithographically",
    definition: "In a way related to creating patterns on surfaces using light."
  },
  {
    word: "Phosphoglyceraldehyde",
    definition: "A simple sugar involved in energy metabolism."
  },
  {
    word: "Overintellectualizing",
    definition: "The act of analyzing or thinking about something too much."
  },
  {
    word: "Overcommercialization",
    definition: "The process of making something excessively commercial."
  },
  {
    word: "Otorhinolaryngologist",
    definition: "A doctor who specializes in ear, nose, and throat conditions."
  },
  {
    word: "Otorhinolaryngologies",
    definition: "Medical studies related to ear, nose, and throat."
  },
  {
    word: "Nondenominationalisms",
    definition: "Beliefs not affiliated with any specific religious denomination."
  },
  {
    word: "Neuroendocrinologists",
    definition: "Scientists who study interactions between the nervous and endocrine systems."
  },
  {
    word: "Neuroendocrinological",
    definition: "Relating to the study of nerve and hormone interactions."
  },
  {
    word: "Multidimensionalities",
    definition: "The qualities of having multiple dimensions or aspects."
  },
  {
    word: "Microminiaturizations",
    definition: "Processes of making devices or components extremely small."
  },
  {
    word: "Meningoencephalitides",
    definition: "Inflammations of the brain and its surrounding membranes."
  },
  {
    word: "Intersubstitutability",
    definition: "The ability of one item to be replaced by another."
  },
  {
    word: "Internationalizations",
    definition: "Processes of making something worldwide or global."
  },
  {
    word: "Interconvertibilities",
    definition: "The ability to change back and forth between forms."
  },
  {
    word: "Interchangeablenesses",
    definition: "The quality of being able to replace one thing with another."
  },
  {
    word: "Institutionalizations",
    definition: "Processes of establishing something as a norm or institution."
  },
  {
    word: "Indistinguishableness",
    definition: "The state of being impossible to tell apart."
  },
  {
    word: "Incomprehensibilities",
    definition: "Things that are extremely hard to understand."
  },
  {
    word: "Immunoelectrophoretic",
    definition: "Related to separating immune proteins using electricity."
  },
  {
    word: "Immunoelectrophoresis",
    definition: "Lab technique combining immune response and electrical separation."
  },
  {
    word: "Immunoelectrophoreses",
    definition: "Multiple tests that separate immune proteins electrically."
  },
  {
    word: "Immunocytochemistries",
    definition: "Lab methods for detecting proteins in cells with antibodies."
  },
  {
    word: "Hypersusceptibilities",
    definition: "Excessive sensitivity to something."
  },
  {
    word: "Hypercholesterolemias",
    definition: "Conditions of having too much cholesterol in the blood."
  },
  {
    word: "Hyperaggressivenesses",
    definition: "Excessively aggressive behaviors."
  },
  {
    word: "Four-Dimensionalities",
    definition: "Qualities involving four dimensions or aspects."
  },
  {
    word: "Extraterritorialities",
    definition: "Areas or rights outside a country’s jurisdiction."
  },
  {
    word: "Establishmentarianism",
    definition: "Support for maintaining traditional institutions."
  },
  {
    word: "Electroretinographies",
    definition: "Tests measuring electrical responses of the retina."
  },
  {
    word: "Electromyographically",
    definition: "In a way related to recording muscle electrical activity."
  },
  {
    word: "Electroencephalograph",
    definition: "A device that records the brain's electrical activity."
  },
  {
    word: "Electroencephalograms",
    definition: "Records of brain electrical activity."
  },
  {
    word: "Electrocardiographies",
    definition: "Tests recording the heart’s electrical activity."
  },
  {
    word: "Disestablishmentarian",
    definition: "A person opposing the official state church."
  },
  {
    word: "Disadvantageousnesses",
    definition: "Qualities of being harmful or unfavorable."
  },
  {
    word: "Dendrochronologically",
    definition: "In a way related to dating events using tree rings."
  },
  {
    word: "Counterinterpretation",
    definition: "An alternative explanation or understanding."
  },
  {
    word: "Counterdemonstrations",
    definition: "Protests held to oppose other protests."
  },
  {
    word: "Countercountermeasure",
    definition: "A tactic to defeat an opponent’s countermeasure."
  },
  {
    word: "Contemporaneousnesses",
    definition: "Qualities of happening at the same time."
  },
  {
    word: "Constitutionalization",
    definition: "The process of adopting or creating a constitution."
  },
  {
    word: "Compartmentalizations",
    definition: "Processes of dividing into separate sections or parts."
  },
  {
    word: "Clinicopathologically",
    definition: "In a way related to disease characteristics in patients."
  },
  {
    word: "Buckminsterfullerenes",
    definition: "Spherical carbon molecules shaped like soccer balls."
  },
  {
    word: "Antiferromagnetically",
    definition: "In a way related to magnetic materials with opposing spins."
  },
  {
    word: "Antiauthoritarianisms",
    definition: "Beliefs opposing strict authority or control."
  },
  {
    word: "Anthropomorphizations",
    definition: "Assigning human traits to non-human things."
  },
  {
    word: "Adrenocorticotrophins",
    definition: "Hormones that stimulate the adrenal glands."
  },
  {
    word: "Adrenocorticosteroids",
    definition: "Steroid hormones produced by the adrenal cortex."
  },
  {
    word: "Acetylcholinesterases",
    definition: "Enzymes that break down the neurotransmitter acetylcholine."
  },
  {
    word: "Xenotransplantations",
    definition: "Transplants of organs or tissues from one species to another."
  },
  {
    word: "Whippoorwill's-Shoes",
    definition: "North American orchids of the genus Cypripedium, also called lady's slipper orchids."
  },
  {
    word: "Whippoorwill's-Boots",
    definition: "North American orchids of the genus Cypripedium, also called lady's slipper orchids."
  },
  {
    word: "Unself-Consciousness",
    definition: "Being unaware of oneself in social situations."
  },
  {
    word: "Unsatisfactorinesses",
    definition: "Qualities of being unsatisfactory or disappointing."
  },
  {
    word: "Unrepresentativeness",
    definition: "Not typical or representative of a group."
  },
  {
    word: "Unintelligiblenesses",
    definition: "States of being very hard to understand."
  },
  {
    word: "Underrepresentations",
    definition: "Instances of being inadequately represented."
  },
  {
    word: "Unconscionablenesses",
    definition: "States of being unfair or unjust."
  },
  {
    word: "Uncompromisingnesses",
    definition: "Qualities of refusing to give in or yield."
  },
  {
    word: "Uncharacteristically",
    definition: "In a way that is unusual or not typical for someone."
  },
  {
    word: "Ultrasegregationists",
    definition: "People who strongly advocate for racial or social separation."
  },
  {
    word: "Ultrarevolutionaries",
    definition: "Extremely radical revolutionaries pushing for total change."
  },
  {
    word: "Ultramicroscopically",
    definition: "In a way only visible with the most powerful microscopes."
  },
  {
    word: "Ultracentrifugations",
    definition: "Processes using very high-speed spinning to separate materials."
  },
  {
    word: "Two-Dimensionalities",
    definition: "Qualities of having only length and width."
  },
  {
    word: "Transformationalists",
    definition: "People who advocate for deep, fundamental change."
  },
  {
    word: "Tetrahydrocannabinol",
    definition: "The main psychoactive compound in cannabis (THC)."
  },
  {
    word: "Syncategorematically",
    definition: "In a way that involves words with no meaning on their own."
  },
  {
    word: "Superspecializations",
    definition: "Very narrow fields of advanced expertise or study."
  },
  {
    word: "Supercalifragilistic",
    definition: "Playfully used to describe something amazing or extraordinary."
  },
  {
    word: "Spectrophotometrical",
    definition: "Related to measuring light absorption by substances."
  },
  {
    word: "Spectroheliographies",
    definition: "Solar images captured using specific light wavelengths."
  },
  {
    word: "Spectrofluorometries",
    definition: "Measurements of light emitted by fluorescent substances."
  },
  {
    word: "Semiautobiographical",
    definition: "Partly based on the author’s own life."
  },
  {
    word: "Roentgenographically",
    definition: "In a way related to taking or using X-ray images."
  },
  {
    word: "Representativenesses",
    definition: "Degrees of how well something stands for a group."
  },
  {
    word: "Representationalists",
    definition: "People who support art that depicts reality clearly."
  },
  {
    word: "Representationalisms",
    definition: "Beliefs in accurate or symbolic representation, especially in art."
  },
  {
    word: "Reinstitutionalizing",
    definition: "Reestablishing something as a formal institution."
  },
  {
    word: "Reindustrializations",
    definition: "Processes of bringing industry back to a region."
  },
  {
    word: "Reconceptualizations",
    definition: "Processes of thinking about something in a new way."
  },
  {
    word: "Radiopharmaceuticals",
    definition: "Drugs containing radioactive substances used for diagnosis or treatment."
  },
  {
    word: "Radioimmunoassayable",
    definition: "Able to be measured using a radioactive antibody test."
  },
  {
    word: "Psychopharmacologist",
    definition: "A doctor who studies or prescribes psychiatric medications."
  },
  {
    word: "Psychopharmacologies",
    definition: "The scientific fields studying drugs that affect the mind."
  },
  {
    word: "Psychopathologically",
    definition: "In a way related to mental or behavioral disorders."
  },
  {
    word: "Pseudosophistication",
    definition: "Fake or pretended worldliness or complexity."
  },
  {
    word: "Pseudoparenchymatous",
   definition: "Having tissue that mimics but isn't true organ tissue."
  },
  {
    word: "Pseudocholinesterase",
    definition: "An enzyme that breaks down certain drugs in the body."
  },
  {
    word: "Professionalizations",
    definition: "Processes of making a job more formal and skilled."
  },
  {
    word: "Polyphiloprogenitive",
    definition: "Having or producing many children or offspring."
  },
  {
    word: "Plethysmographically",
    definition: "In a way related to measuring volume changes in the body."
  },
  {
    word: "Photoreconnaissances",
    definition: "Reconnaissance done using photography, often from aircraft."
  },
  {
    word: "Photophosphorylation",
    definition: "Process by which light powers the production of cellular energy."
  },
  {
    word: "Photointerpretations",
    definition: "Analyses of photos (especially aerial or satellite) to get information."
  },
  {
    word: "Photodisintegrations",
    definition: "Nuclear reactions caused by the absorption of high-energy photons."
  },
  {
    word: "Photoautotrophically",
    definition: "In a way where organisms use light to produce food."
  },
  {
    word: "Phosphomonoesterases",
    definition: "Enzymes that break down phosphate groups in molecules."
  },
  {
    word: "Phosphofructokinases",
    definition: "Enzymes that help regulate sugar breakdown in cells."
  },
  {
    word: "Phosphoenolpyruvates",
    definition: "High-energy molecules involved in sugar metabolism."
  },
  {
    word: "Phosphatidylcholines",
    definition: "Fat molecules found in cell membranes."
  },
  {
    word: "Philoprogenitiveness",
    definition: "Love for one’s children or for having children."
  },
  {
    word: "Phenylthiocarbamides",
    definition: "Compounds used to study genetic taste differences."
  },
  {
    word: "Phenylpropanolamines",
    definition: "Drugs formerly used as decongestants and appetite suppressants."
  },
  {
    word: "Parathyroidectomized",
    definition: "Having had the parathyroid glands surgically removed."
  },
  {
    word: "Paradichlorobenzenes",
    definition: "Chemicals used in mothballs and deodorizers."
  },
  {
    word: "Paleoanthropologists",
    definition: "Scientists who study ancient human fossils and evolution."
  },
  {
    word: "Paleoanthropological",
    definition: "Related to the study of ancient human origins."
  },
  {
    word: "Overprotectivenesses",
    definition: "States of being overly cautious or shielding."
  },
  {
    word: "Overintellectualizes",
    definition: "Thinks about something in an overly abstract or rational way."
  },
  {
    word: "Overintellectualized",
    definition: "Having been analyzed or thought about too abstractly."
  },
  {
    word: "Overenthusiastically",
    definition: "In an excessively eager or excited way."
  },
  {
    word: "Overdifferentiations",
    definition: "Too many distinctions or separations made."
  },
  {
    word: "One-Dimensionalities",
    definition: "Qualities involving only one dimension or aspect."
  },
  {
    word: "Noninstitutionalized",
    definition: "Not placed into formal institutions."
  },
  {
    word: "Nondestructivenesses",
    definition: "Qualities of not causing damage or harm."
  },
  {
    word: "Nondenominationalism",
    definition: "Belief in no specific religious denomination."
  },
  {
    word: "Neuropsychiatrically",
    definition: "In a way related to nervous system mental disorders."
  },
  {
    word: "Neurophysiologically",
    definition: "Concerning the nervous system's function."
  },
  {
    word: "Neuropharmacologists",
    definition: "Scientists who study drugs affecting the nervous system."
  },
  {
    word: "Neuropharmacological",
    definition: "Related to drugs acting on the nervous system."
  },
  {
    word: "Neuroendocrinologist",
    definition: "A specialist studying nerve and hormone interactions."
  },
  {
    word: "Neuroendocrinologies",
    definition: "Studies of nervous and endocrine system connections."
  },
  {
    word: "Mischaracterizations",
    definition: "Wrong or inaccurate descriptions of something."
  },
  {
    word: "Microphotometrically",
    definition: "In a way measuring light on a very small scale."
  },
  {
    word: "Micropaleontologists",
    definition: "Scientists who study tiny fossilized organisms."
  },
  {
    word: "Micropaleontological",
    definition: "Related to the study of microscopic fossils."
  },
  {
    word: "Microminiaturization",
    definition: "Process of making things extremely small."
  },
  {
    word: "Microelectrophoretic",
    definition: "Pertaining to small-scale electric separation of molecules."
  },
  {
    word: "Microelectrophoresis",
    definition: "Technique separating molecules with electricity on a micro scale."
  },
  {
    word: "Microelectrophoreses",
    definition: "Multiple tests of microelectrophoresis."
  },
  {
    word: "Microcrystallinities",
    definition: "Small crystal structures within a substance."
  },
  {
    word: "Magnetohydrodynamics",
    definition: "Study of magnetic properties of fluids."
  },
  {
    word: "Magnetofluiddynamics",
    definition: "The dynamics of magnetic fluids."
  },
  {
    word: "Lymphogranulomatosis",
    definition: "A disease involving swollen lymph nodes."
  },
  {
    word: "Lymphogranulomatoses",
    definition: "Multiple cases of lymph node swelling diseases."
  },
  {
    word: "Keratoconjunctivitis",
    definition: "Inflammation of the cornea and eye’s outer membrane."
  },
  {
    word: "Keratoconjunctivites",
    definition: "Multiple inflammations of cornea and conjunctiva."
  },
  {
    word: "Johnny-Come-Latellies",
    definition: "People who arrive late and are inexperienced."
  },
  {
    word: "Johnnies-Come-Lately",
    definition: "Latecomers who lack experience."
  },
  {
    word: "Irreproachablenesses",
    definition: "Qualities of being blameless or faultless."
  },
  {
    word: "Irreconcilablenesses",
    definition: "States of being impossible to reconcile or agree."
  },
  {
    word: "Interstratifications",
    definition: "Layers formed or arranged between others."
  },
  {
    word: "Internationalization",
    definition: "Making something applicable or recognized worldwide."
  },
  {
    word: "Interconnectednesses",
    definition: "States of being connected with each other."
  },
  {
    word: "Interchangeabilities",
    definition: "Ability to be switched or substituted."
  },
  {
    word: "Intellectualizations",
    definition: "Processes of thinking about something logically or abstractly."
  },
  {
    word: "Institutionalization",
    definition: "Establishing something as a norm or official system."
  },
  {
    word: "Indistinguishability",
    definition: "The quality of being impossible to tell apart."
  },
  {
    word: "Indiscriminatenesses",
    definition: "States of lacking careful distinction."
  },
  {
    word: "Indestructiblenesses",
    definition: "Qualities of being impossible to destroy."
  },
  {
    word: "Inconsiderablenesses",
    definition: "States of being unimportant or insignificant."
  },
  {
    word: "Inconsequentialities",
    definition: "Things that have little or no importance."
  },
  {
    word: "Incomprehensibleness",
    definition: "The quality of being very hard to understand."
  },
  {
    word: "Incommensurabilities",
    definition: "States of being incomparable or lacking common measure."
  },
  {
    word: "Inappreciativenesses",
    definition: "States of not being grateful or appreciative."
  },
  {
    word: "Immunoprecipitations",
    definition: "Lab methods to separate immune complexes by precipitation."
  },
  {
    word: "Immunohistochemistry",
    definition: "Technique for detecting proteins in tissues with antibodies."
  },
  {
    word: "Immunocytochemically",
    definition: "In a way related to detecting proteins in cells."
  },
  {
    word: "Hypersensitivities",
    definition: "Excessive reactions to allergens or stimuli."
  },
  {
    word: "Hyperparathyroidisms",
    definition: "Conditions involving excessive parathyroid hormone."
  },
  {
    word: "Hyperconsciousnesses",
    definition: "States of heightened or excessive awareness."
  },
  {
    word: "Hypercoagulabilities",
    definition: "Tendencies for blood to clot too easily."
  },
  {
    word: "Hypercholesterolemic",
    definition: "Having abnormally high cholesterol levels."
  },
  {
    word: "Hypercholesterolemia",
    definition: "A medical condition of elevated cholesterol in blood."
  },
  {
    word: "Hydrochlorothiazides",
    definition: "Medicines used to reduce blood pressure and fluid retention."
  },
  {
    word: "Homotransplantations",
    definition: "Transplants between genetically similar individuals."
  },
  {
    word: "Histocompatibilities",
    definition: "The ability of tissues to be accepted by a transplant recipient."
  },
  {
    word: "Glomerulonephritides",
    definition: "Inflammations of the kidney’s filtering units."
  },
  {
    word: "Forethoughtfulnesses",
    definition: "Qualities of careful planning or thinking ahead."
  },
  {
    word: "Extemporaneousnesses",
    definition: "Qualities of being done without preparation."
  },
  {
    word: "Expressionlessnesses",
    definition: "States of showing no emotion or expression."
  },
  {
    word: "Existentialistically",
    definition: "In a way related to existential philosophy."
  },
  {
    word: "Encephalomyocarditis",
    definition: "Inflammation of brain and heart muscles."
  },
  {
    word: "Electroretinographic",
    definition: "Related to recording electrical activity of the retina."
  },
  {
    word: "Electrophysiologists",
    definition: "Scientists who study electrical properties of biological cells."
  },
  {
    word: "Electrophysiological",
    definition: "Pertaining to electrical functions in biological systems."
  },
  {
    word: "Electrophotographies",
    definition: "Images made using electrical and photographic techniques."
  },
  {
    word: "Electrooculographies",
    definition: "Tests recording eye movements via electrical signals."
  },
  {
    word: "Electroluminescences",
    definition: "Emissions of light caused by electric current."
  },
  {
    word: "Electroencephalogram",
    definition: "Record of electrical activity in the brain."
  },
  {
    word: "Electrocardiographic",
    definition: "Pertaining to recording heart electrical activity."
  },
  {
    word: "Distinguishabilities",
    definition: "Capabilities of being told apart."
  },
  {
    word: "Dimethylnitrosamines",
    definition: "Chemical compounds, some of which are carcinogenic."
  },
  {
    word: "Departmentalizations",
    definition: "Processes of dividing an organization into departments."
  },
  {
    word: "Deoxyribonucleotides",
    definition: "Building blocks of DNA."
  },
  {
    word: "Deinstitutionalizing",
    definition: "Processes of moving people out of institutions."
  },
  {
    word: "Deindustrializations",
    definition: "Economic decline of industrial activity in a region."
  },
  {
    word: "Dehydrochlorinations",
    definition: "Chemical reactions removing hydrochloric acid."
  },
  {
    word: "Cytodifferentiations",
    definition: "Processes where cells become specialized."
  },
  {
    word: "Crystallographically",
    definition: "In a way related to the study of crystals."
  },
  {
    word: "Countertransferences",
    definition: "Unconscious emotional reactions by therapists."
  },
  {
    word: "Countersurveillances",
    definition: "Actions to avoid being watched or monitored."
  },
  {
    word: "Counterrevolutionary",
    definition: "Someone opposing a revolution."
  },
  {
    word: "Countermobilizations",
    definition: "Actions taken to oppose mobilization efforts."
  },
  {
    word: "Counterintelligences",
    definition: "Activities aimed at thwarting spying."
  },
  {
    word: "Counterdemonstrators",
    definition: "People protesting against another protest."
  },
  {
    word: "Counterdemonstration",
    definition: "A protest held in opposition to another."
  },
  {
    word: "Counterdemonstrating",
    definition: "Actively opposing a demonstration."
  },
  {
    word: "Counterconditionings",
    definition: "Psychological techniques replacing old conditioned responses."
  },
  {
    word: "Conventionalizations",
    definition: "Processes of making something standard or traditional."
  },
  {
    word: "Contradistinguishing",
    definition: "Pointing out differences by contrast."
  },
  {
    word: "Comprehensiblenesses",
    definition: "Degrees of being understandable."
  },
  {
    word: "Compartmentalization",
    definition: "Dividing into sections or categories."
  },
  {
    word: "Chlorofluoromethanes",
    definition: "Chemical compounds once used in refrigerants."
  },
  {
    word: "Chemotherapeutically",
    definition: "In a way related to treatment with chemicals or drugs."
  },
  {
    word: "Buckminsterfullerene",
    definition: "A spherical carbon molecule shaped like a soccer ball."
  },
  {
    word: "Bacteriochlorophylls",
    definition: "Pigments in bacteria used for photosynthesis."
  },
  {
    word: "Antifluoridationists",
    definition: "People opposing water fluoridation."
  },
  {
    word: "Anticonservativeness",
    definition: "Opposition to conservative ideas or policies."
  },
  {
    word: "Anticonservationists",
    definition: "People against conservation efforts."
  },
  {
    word: "Antiauthoritarianism",
    definition: "Opposition to strict authority or control."
  },
  {
    word: "Anthropomorphization",
    definition: "Assigning human traits to non-human things."
  },
  {
    word: "Anthropocentricities",
    definition: "Beliefs focusing on humans as central."
  },
  {
    word: "Adrenocorticotropins",
    definition: "Hormones stimulating adrenal cortex activity."
  },
  {
    word: "Adrenocorticotrophin",
    definition: "A hormone that stimulates adrenal glands."
  },
  {
    word: "Adrenocorticotrophic",
    definition: "Stimulating adrenal cortex function."
  },
  {
    word: "Adrenocorticosteroid",
    definition: "Steroid hormone from adrenal cortex."
  },
  {
    word: "Acetylcholinesterase",
    definition: "An enzyme breaking down the neurotransmitter acetylcholine."
  }
]
