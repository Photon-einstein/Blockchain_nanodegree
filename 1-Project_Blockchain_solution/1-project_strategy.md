# Project strategy

- Software used to make videos:

  - [Loom](https://www.loom.com/meetings)

- [PowerPoint to present the use case](https://docs.google.com/presentation/d/1uN8akAchrIexe28CfyHJuEuj2NcaYSE6yW_WprioaZk/edit?slide=id.g1f95057ddb0_8_96#slide=id.g1f95057ddb0_8_96)

## Project Overview: Blockchain Use Case Evaluation

The goal of this project is for you to evaluate a potential use case for blockchain technology.  
You will research the use case, propose a blockchain-based solution, outline the architecture,  
and identify challenges to implementation. This project exercises your ability to analyze the  
fit of blockchain for a specific application.

You will create a presentation with the following components. Then, you will record a video of  
yourself presenting your entire presentation and introducing your use case and solution.

### **1. Use Case Selection and Research**

Choose a use case that could benefit from a blockchain solution.  
Identify the specific problems this use case intends to solve. Research existing  
non-blockchain solutions currently used. Explain how a blockchain-based implementation could  
provide improvements.

### **2. Proposed Solution and Architecture**

Analyze at least 2-3 potential blockchain platforms. Research attributes like consensus  
approach. Mention technical attributes of the blockchain.

Select an appropriate blockchain platform and justify why it meets the needs of your use case  
based on technical specifications. Provide a high-level architecture diagram outlining the  
core components of your proposed blockchain solution. Walk through the user journey,  
demonstrating how they would interact with the solution.

### **3. Challenges and Considerations**

Discuss potential implementation challenges such as scalability, user experience, regulatory  
requirements, adoption incentives, and other relevant factors. It is a nice-to-have to discuss  
how these challenges could be addressed and what alternatives could complement the blockchain  
aspects.

### **Video Requirements**

Once you've completed your presentation, make a video recording of yourself presenting your  
entire presentation. Here are some requirements for the video:

3-5 minutes should be enough to explain your project, but feel free to go into more detail if  
you need. Do not exceed 7 minutes in your video.
Speak clearly and do not rush explanations.

You can use tools like **Loom** or **Veed** to record your screen while presenting the slides

[Loom](https://www.loom.com/)  
[Veed](https://www.veed.io/)

Export the video file from your software in a common video format like .mp4 or .mov.  
Here, you can find a short sample video I made about a ticketing application built on Avalanche.  
Note that you don't need to add colorful graphics or designs to your presentation, but you  
should keep your slides simple and easy to follow.

### **Standout Suggestions**

Here are some optional standout suggestions to make your project go above and beyond:

Implement a small proof-of-concept demo or mock-up to interactively showcase core functionality  
like minting assets or displaying data. Tools that can help out are **Figma** or **Excalidraw**.  
Extend core functionality to a secondary use case, demonstrating reusability across multiple  
application verticals. Show how your system could grow to other use cases or become a full protocol.  
Discuss integration possibilities with emerging protocols like The Graph or Chain Link to securely  
connect off-chain data and computation.

## Resolution

### **1. Use Case Selection and Research (problem statement)**

Choose a use case that could benefit from a blockchain solution.  
Identify the specific problems this use case intends to solve. Research existing  
non-blockchain solutions currently used. Explain how a blockchain-based implementation could  
provide improvements.

### **1. Use Case Selection and Research (in progress)**

The specific problem that this blockchain solution is trying to solve are Real Estate Transactions.  
Currently, the real state transaction are in many cases slow, paper heavy, prone to fraud and expensive.  
Cost in traditional systems span from agent commissions, legal fees, title insurance, taxes and several  
administrative charges. This costs all added make up for a significant percentage of the property's value,  
making the process costly for buyers and sellers.
Blockchain solution aim to reduce some of these costs by automating processes and minimizing intermediaries.

1. Research and explain non-blockchain solutions currently used (in progress).

#### **Multiple Listing Service (MLS)**

[MLS](https://www.investopedia.com/terms/m/multiple-listing-service-mls.asp)

**What is MLS?**

The Multiple Listing Service (MLS) is a centralized database where real estate  
agents and brokers list properties for sale. It allows agents to share information  
about properties and helps buyers find available homes.

How it works:

Real estate agents input property details into the MLS.  
Other agents can view, search, and share these listings with their clients.
MLS systems are usually regional and require membership.

**Strong Points:**

- Centralized access to property listings for agents and buyers.
- Increases property visibility and market efficiency.
- Facilitates cooperation between agents, leading to faster sales.

**Weak Points / Problems:**

- Not open to the public; access is restricted to licensed agents and brokers.
- Data can be fragmented across different regional MLS systems.
- Manual data entry can lead to errors or outdated information.
- Centralization can create single points of failure and limit transparency.

#### **Escrow services**

[Escrow services](https://www.rocketmortgage.com/learn/what-is-escrow)

**What is Escrow?**

Escrow is a financial arrangement where a neutral third party (the escrow agent)  
holds funds and documents on behalf of the buyer and seller until all conditions  
of the transaction are met.

**How it works:**

- Buyer and seller agree to terms and sign a contract.
- Buyer deposits funds with the escrow agent.
- Escrow agent verifies that all contractual obligations (inspections, paperwork,  
  etc.) are fulfilled.
- Once all conditions are met, the escrow agent releases funds to the seller and  
  transfers ownership to the buyer.

**Strong Points:**

- Protects both buyer and seller by ensuring all conditions are met before money  
  or property changes hands.
- Reduces risk of fraud or default.
- Provides a clear, step-by-step process for complex transactions.

**Weak Points / Problems:**

- Can be slow due to manual verification and paperwork.
- Escrow fees add to transaction costs.
- Errors or delays by the escrow agent can hold up the transaction.
- Centralized control means trust is required in the escrow company.

#### **Title companies**

[Title Companies](https://www.forbes.com/advisor/mortgages/title-company/)

**What are Title Companies?**

Title companies are organizations that verify the legal ownership of a property  
and ensure there are no claims, liens, or disputes before a sale. They also  
provide title insurance to protect buyers and lenders from future ownership issues.

**How they work:**

- Conduct a title search to review public records for ownership history, liens,  
  or legal issues.
- Resolve any problems found (e.g., unpaid taxes, disputes).
- Issue title insurance to protect against undiscovered issues.
- Facilitate the closing process by handling paperwork and funds transfer.

**Strong Points:**

- Reduce risk of fraud or ownership disputes.
- Provide peace of mind to buyers and lenders through title insurance.
- Ensure a clear transfer of property ownership.

**Weak Points / Problems:**

- Title searches can be slow and involve manual record checks.
- Title insurance adds to transaction costs.
- Errors or missed issues in the search can still result in future legal  
  problems.
- Centralized process relies on trust in the title company’s thoroughness.

#### **Notaries and Legal Professionals**

[Notaries and Legal Professionals](https://www.nationalnotary.org/knowledge-center/about-notaries/what-is-a-notary-public)

**What are Notaries and Legal Professionals?**

Notaries are authorized officials who verify the identity of parties, witness  
signatures, and certify documents.  
Legal professionals (lawyers, solicitors) provide legal advice, draft contracts,  
and ensure compliance with laws.

**How they work:**

Notaries confirm identities and witness the signing of documents to prevent fraud.  
Legal professionals review contracts, advise clients, and handle disputes.  
Both ensure that transactions meet legal requirements and are properly documented.

**Strong Points:**

Help prevent fraud and ensure legal validity of documents.  
Provide expert advice and protect client interests.  
Ensure compliance with complex regulations.

**Weak Points / Problems:**

Services can be expensive, adding to transaction costs.  
Manual processes can slow down transactions.  
Errors or oversights may still occur.  
Reliance on centralized trust in individuals or firms.

#### **Banks and Mortgage Lenders:**

[How Mortgages Work](https://europa.eu/youreurope/citizens/consumers/financial-products-and-services/mortgages/index_en.htm) (Done)
[Mortgage overview](https://www.investopedia.com/terms/m/mortgage.asp) (Done)
[Understanding the Mortgage Process (The Mortgage Reports)](https://www.investopedia.com/mortgage-process-explained-5213694) (Done)

**What are Banks and Mortgage Lenders?**  
Banks and mortgage lenders are financial institutions that provide  
loans to buyers for purchasing real estate. They assess  
creditworthiness, offer financing options, and manage payments  
over the life of the loan.

**How they work:**

Buyers apply for a mortgage loan.  
The lender evaluates the buyer’s financial status and property value.  
If approved, the lender provides funds to purchase the property.  
The buyer repays the loan over time, usually with interest.  
The lender holds a lien on the property until the loan is paid off.

**Strong Points:**

Enable buyers to purchase property without needing full upfront payment.  
Offer various loan products to suit different needs.  
Provide financial expertise and regulatory compliance.

**Weak Points / Problems:**

Lengthy approval processes and extensive paperwork.  
Interest payments and fees increase overall costs.  
Strict requirements can exclude some buyers.  
Centralized control and risk of foreclosure if payments are missed.

#### **Government Registries:**

[Understanding Property Deeds](https://www.investopedia.com/articles/realestate/12/property-deeds-and-real-property.asp#:~:text=A%20property%20deed%20is%20a,the%20party%20transferring%20the%20property.) (Done)

[Guidance for members of the public in UK](https://www.gov.uk/guidance/guidance-for-members-of-the-public) (Done)

[World Bank Page](https://www.worldbank.org/en/topic/land/overview) (Done)

[Land Records Management System Using GIS Technology](https://www.cyberswift.com/blog/land-records-management-system-using-gis-technology/) (Done)

**What are Government Registries?**
Government registries are official databases maintained by local or national authorities  
to record property ownership, transfers, and related legal documents. They ensure legal  
recognition and public record of property rights.

**How they work:**
Property deeds and ownership details are submitted to the registry office.  
Officials verify documents and update records to reflect new ownership or changes.  
Registries provide public access to property records, supporting transparency and legal  
protection.

**Strong Points:**
Legal recognition and protection of property rights.  
Public access to ownership records increases transparency.  
Helps prevent disputes over property ownership.

**Weak Points/Problems:**
Manual processes can be slow and prone to errors.  
Records may be fragmented across different jurisdictions.  
Risk of fraud or tampering if security is weak.  
Centralized control can lead to bureaucratic delays and limited accessibility.

### **2. Explain how a blockchain-based implementation could provide improvements (TBD)**

A blockchain-based implementation could provide several improvements to real estate transactions:

- **Transparency**: All transaction records are stored on a public or permissioned ledger,  
  making ownership history and transfers easily auditable and reducing fraud.

* **Efficiency**: Smart contracts automate processes like payments, escrow, and title transfers,  
  reducing paperwork and speeding up transactions.

* **Cost Reduction**: By minimizing intermediaries (agents, escrow, title companies), blockchain  
  can lower fees and administrative costs.

* **Security**: Cryptographic verification and decentralized storage protect against tampering  
  and unauthorized changes.

* **Accessibility**: Parties can access records and verify ownership instantly, even across  
  jurisdictions.

* **Immutability**: Once recorded, transaction data cannot be altered, ensuring a reliable and  
  permanent record.

Overall, blockchain can make real estate transactions faster, safer, and more cost-effective  
compared to traditional systems.

### **2. Proposed Solution and Architecture**

#### Analysis of Potential Blockchain Platforms

**1. Ethereum**

- **Consensus Approach:** Proof of Stake (PoS)
- **Technical Attributes:**
  - Supports smart contracts for automating payments, escrow, and title transfers
  - Public ledger for transparency
  - Tokenization standards (ERC-721, ERC-1155) for representing property ownership
  - Large developer ecosystem
- **Suitability:** Well-suited for automating transactions and transparent ownership records, but scalability and transaction costs can be concerns.

**2. Hyperledger Fabric**

- **Consensus Approach:** Pluggable consensus (e.g., Raft, Kafka)
- **Technical Attributes:**
  - Permissioned blockchain for privacy and regulatory compliance
  - Modular architecture and private channels for confidential transactions
  - Chaincode (smart contracts) in Go, Java, or Node.js
  - High throughput and low latency
- **Suitability:** Ideal for enterprise and government use cases where privacy and compliance are critical.

**3. Polygon**

- **Consensus Approach:** Proof of Stake (PoS)
- **Technical Attributes:**
  - Layer 2 scaling solution for Ethereum
  - Fast, low-cost transactions
  - Supports Ethereum-compatible smart contracts
  - Bridges for interoperability with Ethereum
- **Suitability:** Good for scalable, cost-effective applications such as high-volume property listings.

| Platform           | Consensus | Smart Contracts | Privacy | Scalability | Cost   | Suitability              |
| ------------------ | --------- | --------------- | ------- | ----------- | ------ | ------------------------ |
| Ethereum           | PoS       | Yes             | Public  | Medium      | Medium | Tokenization, automation |
| Hyperledger Fabric | Pluggable | Yes             | Private | High        | Low    | Enterprise, compliance   |
| Polygon            | PoS       | Yes             | Public  | High        | Low    | Scalable, low-cost apps  |

#### Selected Blockchain Platform and Justification

**Recommended Platform: Hyperledger Fabric**

**Justification:**  
Hyperledger Fabric is the most appropriate platform for real estate transactions due to its permissioned  
architecture, which ensures privacy and regulatory compliance—key requirements in property dealings.  
Its modular design allows for private channels, enabling confidential transactions between parties  
(e.g., buyers, sellers, banks, government registries). Fabric supports high throughput and low latency,  
making it suitable for processing multiple transactions efficiently. Smart contracts (Chaincode) can  
automate escrow, title transfer, and payment processes, reducing manual paperwork and errors.  
The platform’s flexibility and enterprise focus make it ideal for integrating with existing systems  
used by real estate agencies, banks, and government registries, while maintaining security and data  
integrity.

In summary, Hyperledger Fabric meets the needs of real estate transactions by providing privacy,  
scalability, automation, and compliance with legal requirements.

I recommend Hyperledger Fabric over Ethereum and Polygon for real estate transactions because:

- **Privacy and Permissioned Access**: Real estate deals often require confidentiality and compliance  
  with regulations. Hyperledger Fabric’s permissioned model ensures only authorized parties can access  
  sensitive data, unlike public blockchains.

* **Regulatory Compliance**: Fabric’s architecture supports private channels and granular access control,  
  making it easier to meet legal and regulatory requirements common in property transactions.

* **Enterprise Integration**: Fabric is designed for enterprise use, allowing seamless integration with  
  existing systems used by agencies, banks, and government registries.

* **Scalability and Performance**: It offers high throughput and low latency, which is important for  
  handling many transactions efficiently.

* **Customizability**: Its modular design lets you tailor the network to specific business needs,  
  including consensus mechanisms and smart contract logic.

In contrast, Ethereum and Polygon are public blockchains, which may pose privacy concerns and regulatory  
challenges for sensitive real estate data. While they excel in transparency and tokenization, Hyperledger  
Fabric better addresses the unique needs of real estate transactions.

#### Further Reading: Hyperledger Fabric

- [Hyperledger Fabric Official Documentation](https://hyperledger-fabric.readthedocs.io/en/latest/)

  - Comprehensive technical docs, tutorials, and architecture details. (Done)

- [Hyperledger Fabric Overview (Linux Foundation)](https://www.hyperledger.org/use/fabric)

  - General overview, use cases, and project information. (Done)

- [Getting Started with Hyperledger Fabric (IBM Developer)](https://developer.ibm.com/learningpaths/get-started-blockchain/hyperledger-fabric/)

  - Beginner-friendly introduction and practical guides. (Done, contains a good schema of the architecture of the network)

- [Hyperledger Fabric GitHub Repository](https://github.com/hyperledger/fabric)

  - Source code, releases, and developer discussions. (Done)

- [Hyperledger Fabric Tutorials (YouTube)](https://www.youtube.com/results?search_query=hyperledger+fabric+tutorial)
  - Video walkthroughs for setup, smart contracts, and network configuration. (Done)

**Key information:**

"For enterprise use, we need to consider the following requirements:

- Participants must be identified/identifiable
- Networks need to be permissioned
- High transaction throughput performance
- Low latency of transaction confirmation
- Privacy and confidentiality of transactions  
  and data pertaining to business transactions

While many early blockchain platforms are currently  
being adapted for enterprise use, Hyperledger Fabric  
has been designed for enterprise use from the outset.

Fabric is the first distributed ledger platform to support  
smart contracts authored in general-purpose programming languages  
such as Java, Go, and Node.js, rather than constrained domain-specific  
languages (DSL). This means that most enterprises already have the skill  
set needed to develop smart contracts, and no additional training to  
learn a new language or DSL is needed.

One of the most important of the platform’s differentiators is its  
support for pluggable consensus protocols that enable the platform to  
be more effectively customized to fit particular use cases and trust models.  
For instance, when deployed within a single enterprise, or operated by a trusted  
authority, fully Byzantine fault-tolerant consensus might be considered unnecessary  
and an excessive drag on performance and throughput. In situations such as that,  
a crash fault-tolerant (CFT) consensus protocol might be more than adequate whereas,  
in a multi-party, decentralized use case, a more traditional Byzantine fault-tolerant  
(BFT) consensus protocol might be required.

Fabric can leverage consensus protocols that do not require a native cryptocurrency to  
incent costly mining or to fuel smart contract execution. Avoidance of a cryptocurrency  
reduces some significant risk/attack vectors, and absence of cryptographic mining operations  
means that the platform can be deployed with roughly the same operational cost as any  
other distributed system."

[Source](https://hyperledger-fabric.readthedocs.io/en/latest/whatis.html)

#### Provide a high-level architecture diagram outlining the core components of your proposed blockchain solution.

In this particular example, the high level architecture diagram would be for the Hyperledger Fabric.

For a high-level architecture diagram of Hyperledger Fabric in a real estate use case, you should\
include these core components:

**Client Applications**: Used by buyers, sellers, agents, banks, and registries to interact with the network.\
**Peers**: Nodes that host ledgers and smart contracts (chaincode), validate transactions, and endorse proposals.\
**Ordering Service**: Orders transactions into blocks and ensures consensus across the network.\
**Certificate Authority (CA)**: Manages identities and issues digital certificates for network participants.\
**Channels**: Private subnets for confidential transactions between specific parties (e.g., buyer/seller,\
bank/registry).\
**Smart Contracts (Chaincode)**: Automate business logic (escrow, title transfer, payments).\
**Ledger**: Distributed database storing all transaction records.

```text
+-------------------+      +-------------------+      +-------------------+
|   Client Apps     |<---->|      Peers        |<---->|   Ordering Service |
+-------------------+      +-------------------+      +-------------------+
         |                        |                          |
         v                        v                          v
+-------------------+      +-------------------+      +-------------------+
| Certificate Auth. |      |   Channels        |      |   Ledger          |
+-------------------+      +-------------------+      +-------------------+
         |                        |                          |
         v                        v                          v
+-------------------+      +-------------------+      +-------------------+
|  Smart Contracts  |      |   Real Estate     |      |   Registry/Bank   |
+-------------------+      |   Transactions    |      +-------------------+
                           +-------------------+
```

- References to read about the architecture diagram:
  [Hyperledger Fabric Official Architecture Overview](https://hyperledger-fabric.readthedocs.io/en/latest/architecture.html) (Done, only for reference)

  [Hyperledger Architecture](https://www.geeksforgeeks.org/computer-networks/hyperledger-architecture/) (Done)

  [Hyperledger Fabric in Blockchain](https://www.geeksforgeeks.org/computer-networks/hyperledger-fabric-in-blockchain/) (Done, contain a good diagram)

  [Hyperledger Fabric — Part 1 — Components and Architecture](https://blog.clairvoyantsoft.com/hyperledger-fabric-components-and-architecture-b874b36c4af5) (Done, contains some good diagrams)

  [Hyperledger Fabric — Part 2 — Transaction Flow](https://blog.clairvoyantsoft.com/hyperledger-fabric-transaction-flow-c6bcc2142b5a) (Done)

  [Blockchain for Enterprise – Hyperledger Fabric – Transaction Flow](https://notepub.io/notes/blockchain-technology/blockchain-for-enterprise/how-does-the-transaction-flow-happen-in-hyperledger-fabric/) (in progress, State: "Step 1/7: Client Proposed Transaction")
