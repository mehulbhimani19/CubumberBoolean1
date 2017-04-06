

  Feature: log in functionality of Guru99

    Scenario Outline:As an Admin I should able to log in with valid credential

      Given I am in log in page
      When  I enter valid "<username>" and "<password>"
      Then I should able to see homepage "<result>"


      Examples:
        | username   | password   | result |
#       valid username and password
        | mngr54749  |tEquzYn     |true    |

##         valid username and password
#        |mngr54748   | basUzab    |true    |

##       Valid username and invalid password
#        |mngr54768   | byzygEtIN  |false   |
##
##        Invalid username and valid password
#        |mngr54749IN |tEquzYn     | false  |
#
##        Blank username and password
#        |            |            |false   |
#
##        valid username and blank password
#        | mngr54749  |            | false  |
##
##        blank username and valid password
#        |            | tEquzYn   | false  |
##
##      invalid username  and blank password
#       |mngr54749IN  |           |false|
#
##      blank usernmae and invalid password
#     |              | tEquzYnIN  |false  |







